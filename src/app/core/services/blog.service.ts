import{Injectable}from'@angular/core';import{HttpClient}from'@angular/common/http';import{Observable,map,shareReplay}from'rxjs';import{PortfolioData,BlogItem}from'../../shared/models/portfolio.model';
// To connect to real API replace getAll() with: return this.http.get<BlogItem[]>('https://api.yoursite.com/blogs');
@Injectable({providedIn:'root'})
export class BlogService{
  private readonly url='assets/data/portfolio.json';private cache$!:Observable<BlogItem[]>;
  constructor(private http:HttpClient){}
  getAll():Observable<BlogItem[]>{if(!this.cache$)this.cache$=this.http.get<PortfolioData>(this.url).pipe(map(d=>d.blogs.items),shareReplay(1));return this.cache$}
  getById(id:number):Observable<BlogItem|undefined>{return this.getAll().pipe(map(items=>items.find(b=>b.id===id)))}
  getByCategory(cat:string):Observable<BlogItem[]>{return this.getAll().pipe(map(items=>cat==='All'?items:items.filter(b=>b.category===cat)))}
}
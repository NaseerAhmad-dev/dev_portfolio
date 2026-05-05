import{Injectable}from'@angular/core';import{HttpClient}from'@angular/common/http';import{Observable,shareReplay}from'rxjs';import{PortfolioData}from'../../shared/models/portfolio.model';
@Injectable({providedIn:'root'})
export class PortfolioService{
  private readonly url='assets/data/portfolio.json';private cache$!:Observable<PortfolioData>;
  constructor(private http:HttpClient){}
  getData():Observable<PortfolioData>{if(!this.cache$)this.cache$=this.http.get<PortfolioData>(this.url).pipe(shareReplay(1));return this.cache$}
}
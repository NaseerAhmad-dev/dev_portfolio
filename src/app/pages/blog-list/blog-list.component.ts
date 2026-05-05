import{Component,OnInit}from'@angular/core';import{Router}from'@angular/router';import{BlogService}from'../../core/services/blog.service';import{PortfolioService}from'../../core/services/portfolio.service';import{BlogItem}from'../../shared/models/portfolio.model';
@Component({selector:'app-blog-list',templateUrl:'./blog-list.component.html',styleUrls:['./blog-list.component.scss']})
export class BlogListComponent implements OnInit{
  meta:any;blogs:BlogItem[]=[];filtered:BlogItem[]=[];categories:string[]=[];activeFilter='All';
  constructor(private bs:BlogService,private ps:PortfolioService,private r:Router){}
  ngOnInit():void{this.ps.getData().subscribe(d=>{this.meta=d.blogs;this.categories=d.blogs.categories});this.bs.getAll().subscribe(b=>{this.blogs=b;this.filtered=b})}
  setFilter(cat:string):void{this.activeFilter=cat;this.filtered=cat==='All'?this.blogs:this.blogs.filter(b=>b.category===cat)}
  open(id:number):void{this.r.navigate(['/blog',id])}
}
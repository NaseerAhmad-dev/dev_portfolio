import{Component,OnInit}from'@angular/core';import{PortfolioService}from'../../core/services/portfolio.service';
@Component({selector:'app-about',templateUrl:'./about.component.html',styleUrls:['./about.component.scss']})
export class AboutComponent implements OnInit{about:any;constructor(private p:PortfolioService){}ngOnInit():void{this.p.getData().subscribe(d=>this.about=d.about)}}
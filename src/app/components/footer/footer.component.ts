import{Component,OnInit}from'@angular/core';import{PortfolioService}from'../../core/services/portfolio.service';
@Component({selector:'app-footer',templateUrl:'./footer.component.html',styleUrls:['./footer.component.scss']})
export class FooterComponent implements OnInit{year=2026;constructor(private p:PortfolioService){}ngOnInit():void{this.p.getData().subscribe(d=>this.year=d.footer.year)}}
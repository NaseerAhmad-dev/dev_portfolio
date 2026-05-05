import{Component,OnInit}from'@angular/core';import{PortfolioService}from'../../core/services/portfolio.service';
@Component({selector:'app-skills',templateUrl:'./skills.component.html',styleUrls:['./skills.component.scss']})
export class SkillsComponent implements OnInit{skills:any;constructor(private p:PortfolioService){}ngOnInit():void{this.p.getData().subscribe(d=>this.skills=d.skills)}}
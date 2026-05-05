import{Component,OnInit}from'@angular/core';
import{PortfolioService}from'../../core/services/portfolio.service';
import{EducationItem}from'../../shared/models/portfolio.model';

interface EducationSection{kicker:string;title:string;titleHighlight:string;items:EducationItem[]}

@Component({
  selector:'app-education',
  templateUrl:'./education.component.html',
  styleUrls:['./education.component.scss']
})
export class EducationComponent implements OnInit{
  education!:EducationSection;

  constructor(private svc:PortfolioService){}

  ngOnInit():void{
    this.svc.getData().subscribe(d=>this.education=d.education);
  }
}

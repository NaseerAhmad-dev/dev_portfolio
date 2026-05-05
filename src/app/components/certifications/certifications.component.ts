import{Component,OnInit}from'@angular/core';
import{PortfolioService}from'../../core/services/portfolio.service';
import{Certification}from'../../shared/models/portfolio.model';

interface CertificationsSection{kicker:string;title:string;titleHighlight:string;items:Certification[]}

@Component({
  selector:'app-certifications',
  templateUrl:'./certifications.component.html',
  styleUrls:['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit{
  certifications!:CertificationsSection;

  constructor(private svc:PortfolioService){}

  ngOnInit():void{
    this.svc.getData().subscribe(d=>this.certifications=d.certifications);
  }
}

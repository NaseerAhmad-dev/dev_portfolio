import{Component,OnInit}from'@angular/core';
import{PortfolioService}from'../../core/services/portfolio.service';

@Component({
  selector:'app-whatsapp-button',
  templateUrl:'./whatsapp-button.component.html',
  styleUrls:['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent implements OnInit{
  href='';

  constructor(private readonly svc:PortfolioService){}

  ngOnInit():void{
    this.svc.getData().subscribe(d=>{
      const{whatsappNumber,whatsappMessage}=d.contact;
      this.href=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    });
  }
}

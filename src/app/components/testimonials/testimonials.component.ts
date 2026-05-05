import{Component,OnInit}from'@angular/core';
import{PortfolioService}from'../../core/services/portfolio.service';
import{Testimonial}from'../../shared/models/portfolio.model';

interface TestimonialsSection{kicker:string;title:string;titleHighlight:string;items:Testimonial[]}

@Component({
  selector:'app-testimonials',
  templateUrl:'./testimonials.component.html',
  styleUrls:['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit{
  testimonials!:TestimonialsSection;

  constructor(private svc:PortfolioService){}

  ngOnInit():void{
    this.svc.getData().subscribe(d=>this.testimonials=d.testimonials);
  }
}

import{Component,OnInit}from'@angular/core';
import{FormBuilder,FormGroup,Validators}from'@angular/forms';
import{HttpClient,HttpHeaders}from'@angular/common/http';
import{PortfolioService}from'../../core/services/portfolio.service';

@Component({selector:'app-contact',templateUrl:'./contact.component.html',styleUrls:['./contact.component.scss']})
export class ContactComponent implements OnInit{
  contact:any;
  form!:FormGroup;
  sending=false;
  sent=false;
  error=false;

  private formEndpoint='';

  constructor(
    private readonly svc:PortfolioService,
    private readonly fb:FormBuilder,
    private readonly http:HttpClient
  ){}

  ngOnInit():void{
    this.svc.getData().subscribe(d=>{
      this.contact=d.contact;
      this.formEndpoint=d.contact.formEndpoint;
    });
    this.form=this.fb.group({
      name:   ['',Validators.required],
      email:  ['', [Validators.required,Validators.email]],
      message:['',Validators.required]
    });
  }

  onSubmit():void{
    if(this.form.invalid||this.sending)return;
    this.sending=true;
    this.sent=false;
    this.error=false;

    this.http.post(
      this.formEndpoint,
      this.form.value,
      {headers:new HttpHeaders({'Accept':'application/json'})}
    ).subscribe({
      next:()=>{
        this.sent=true;
        this.sending=false;
        this.form.reset();
      },
      error:()=>{
        this.error=true;
        this.sending=false;
      }
    });
  }
}

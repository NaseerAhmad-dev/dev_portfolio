import{Injectable}from'@angular/core';

@Injectable({providedIn:'root'})
export class ThemeService{
  private readonly KEY='portfolio-theme';
  isDark=true;

  constructor(){
    const saved=typeof localStorage!=='undefined'?localStorage.getItem(this.KEY):null;
    this.isDark=saved!=='light';
    this.apply();
  }

  toggle():void{
    this.isDark=!this.isDark;
    localStorage.setItem(this.KEY,this.isDark?'dark':'light');
    this.apply();
  }

  private apply():void{
    document.documentElement.setAttribute('data-theme',this.isDark?'dark':'light');
  }
}

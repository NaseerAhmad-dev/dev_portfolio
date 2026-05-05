import{NgModule}from'@angular/core';import{RouterModule,Routes}from'@angular/router';
import{HomePageComponent}from'./pages/home/home.component';
import{BlogListComponent}from'./pages/blog-list/blog-list.component';
import{BlogDetailComponent}from'./pages/blog-detail/blog-detail.component';
const routes:Routes=[{path:'',component:HomePageComponent},{path:'blog',component:BlogListComponent},{path:'blog/:id',component:BlogDetailComponent},{path:'**',redirectTo:''}];
@NgModule({imports:[RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled',anchorScrolling:'enabled',scrollOffset:[0,72]})],exports:[RouterModule]})
export class AppRoutingModule{}
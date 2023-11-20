import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AddblogComponent } from './components/addblog/addblog.component';
import { EditblogComponent } from './components/editblog/editblog.component';
import { BlogsdetailsComponent } from './components/blogsdetails/blogsdetails.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { routeGuard } from './route.guard';
import { authGuard } from './auth.guard';



const routes: Routes = [
  {
   path:'',component:HomeComponent,

  },
  {
    path:'blog',component:BlogsComponent,canActivate:[routeGuard]
  },
  {
    path:'blog/:id',component:BlogsComponent
  },
  {
    path:'addblog',component:AddblogComponent,canActivate:[authGuard]
  },
  {
    path:'editblog',component:EditblogComponent
  },
  {
    path:'editblog/:id',component:EditblogComponent
  },
  {
    path:'blogdetail',component:BlogsdetailsComponent
  },
  {
    path:'blogdetail/:id',component:BlogsdetailsComponent
  },
  {
    path:'register',component:RegisterComponent
  },

  {
    path:'**',component:ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

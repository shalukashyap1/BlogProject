import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AddblogComponent } from './components/addblog/addblog.component';
import { EditblogComponent } from './components/editblog/editblog.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogsdetailsComponent } from './components/blogsdetails/blogsdetails.component';
import { HttpClientModule} from '@angular/common/http';
import { BlogService} from 'src/app/service/blog.service';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    AddblogComponent,
    EditblogComponent,
    ErrorComponent,
    BlogsdetailsComponent,
    HomeComponent,
    RegisterComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],

  providers:[BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blogsdetails',
  templateUrl: './blogsdetails.component.html',
  styleUrls: ['./blogsdetails.component.css']
})
export class BlogsdetailsComponent {
  blogId:any;
  content:any;
  constructor(private service:BlogService , private route:ActivatedRoute){
    this.route.paramMap.subscribe((params)=>{
      this.blogId=params.get('id');

    });
    console.log(this.blogId);
    service.getblogById(this.blogId).subscribe((val) => {
     this.content = val;
   });
  } 
}

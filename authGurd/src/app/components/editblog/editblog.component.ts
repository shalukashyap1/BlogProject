import { Component } from '@angular/core';
import { BlogService} from 'src/app/service/blog.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {
  blogId:any;
  data:any;
  newblog:any;
  ctry:any

 constructor(private service:BlogService,private route:ActivatedRoute ,private router:Router){
  
   this.route.paramMap.subscribe((params)=>{
     this.blogId=params.get('id');
     
   });
   console.log(this.blogId);
   service.getblogById(this.blogId).subscribe((val) => {
    this.newblog = val;
  });
  
  this.ctry=service.catagory;

 }
 
 
 
 add(data:any){
  this.service.editblog(data,this.blogId).subscribe((val)=>{
  this.router.navigate(['/blog']);
  alert('successfully updated')
  data.save(val);
  });
 }

}

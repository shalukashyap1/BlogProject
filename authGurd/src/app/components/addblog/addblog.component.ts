import { Component } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {
  
  ctry:any;
 
  constructor(private service:BlogService,private route:Router){
this.ctry=service.catagory;
  }
  add(data:any){
    this.service.saveblog(data).subscribe(val=>{
      this.route.navigate(['/blog']);
      data.save(val);
      alert('successfully added blog')
      console.log(data);
  });
  }
}

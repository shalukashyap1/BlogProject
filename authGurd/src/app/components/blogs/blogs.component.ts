import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs:any;
limit:number=15;
  constructor(private service:BlogService,private route:Router){
     service.getblog().subscribe((val)=>{
    this.blogs=val;
    console.log(this.blogs);
   })


  }
 
  view(id:any){
    this.route.navigate(['/blogdetail/'+id])
  }
  edit(id:any){
    this.route.navigate(['/editblog/'+id])
  }
  delete(id:any)
 {
  this.service.deletblog(id).subscribe(val=>{
    this.service.getblog().subscribe((val)=>{
      this.blogs=val;
    this.route.navigate(['/blog']);
    alert('Delete Data');
    });
  })
 }

}

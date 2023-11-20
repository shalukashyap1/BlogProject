import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
loginForm=new FormGroup({
  name:new FormControl(),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
})
constructor(private router:Router,private http:HttpClient){}
get f(){
  return this.loginForm.controls;
}
login(){
 this.http.get<any>('http://localhost:3000/users').subscribe(val=>{
  
      const user=val.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      });
if(user){
  alert("successfullt login");
  this.loginForm.reset();
  this.router.navigate(['/blog']);
  localStorage.setItem('token','true')
}else{
  alert("User not found");
  
}
});
console.log(this.loginForm.value)
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm=new FormGroup({
    name:new FormControl(),
    email:new FormControl("",[Validators.required,Validators.email]),
    phn:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    password:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  })
  constructor(private router:Router,private http:HttpClient){}
get f(){
  return this.registerForm.controls;
}
  register(){
   this.http.post<any>('http://localhost:3000/users',this.registerForm.value).subscribe(val=>{
   
   })
    console.log(this.registerForm.value);
    this.registerForm.reset();
    alert('Registration successfull, please login first ')
  }
}

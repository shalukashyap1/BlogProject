import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logOutForm=new FormGroup({
    name:new FormControl(),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  })
  constructor(private router:Router,private http:HttpClient){}
  get f(){
    return this.logOutForm.controls;
  }
  logOut(){
        alert("Leave this Application?")
        localStorage.removeItem('token');
        this.router.navigate(['/'])
}
}

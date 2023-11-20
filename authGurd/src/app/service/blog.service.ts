import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http:HttpClient) { }

  catagory:any=['MARKETING','IT','TREADING','LATEST','LETEST TECH','OTHERS']

  getblog(){
    return this._http.get('http://localhost:3000/blogs');
  }
  getblogById(id:any){
    return this._http.get('http://localhost:3000/blogs/'+id)
  }
  saveblog(body:any){
    return this._http.post('http://localhost:3000/blogs',body);
  }
  editblog(body:any,id:any){
    return this._http.put('http://localhost:3000/blogs/'+id,body);
  }
  deletblog(id:any){
return this._http.delete('http://localhost:3000/blogs/'+id)
  }
}

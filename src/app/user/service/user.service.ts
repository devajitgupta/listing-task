import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
	public ROOT_URL="http://localhost:3000/api/user";


  constructor(private http:HttpClient,private router:Router) {}


  register(user){
  	return this.http.post<any>(`${this.ROOT_URL}/register`,user);
  }

  login(user){
  	return this.http.post<any>(`${this.ROOT_URL}/login`,user);
  }
  loggedIn(){
  	return !!localStorage.getItem("token");
  }
  logOut(){
  	localStorage.removeItem("token");
  	this.router.navigate(["/listings"]);
  }
}



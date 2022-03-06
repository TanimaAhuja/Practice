import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class UserServiceService {


constructor(private http:HttpClient) { }
url: string ='http://localhost:3000/users';

getUser(){
  return this.http.get(this.url);
}



saveUser(data:any){
  return this.http.post("http://localhost:3000/users",data);
}

}





import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from '../models/usermodel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient)
   {  }


  list :UserModel;
   username :string;
   password :string;

   
  authUser(user :any)
  {
    let url ="https://localhost:44303/api/Login?username="+user.username+"&password="+user.password;

   return this.http.get(url).toPromise().then(res=>this.list = res as UserModel);

  }

}

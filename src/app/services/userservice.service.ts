import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/usermodel.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient)
   {  }

   listuser :UserModel[];
      
  getuser()
  {
    let url ="https://localhost:44303/api/user";

   return this.http.get(url).toPromise().then(res=>this.listuser = res as UserModel[]);

  }
}

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

   url ="https://localhost:44303/api/user";
   updateUserCollection : UserModel;
      
  getuser()
  {
    
   return this.http.get(this.url).toPromise().then(res=>this.listuser = res as UserModel[]);

  }

  addUser(data : any)
  {  
      return this.http.post(this.url,data as UserModel).toPromise();
  }

  deleteUser(id : number)
  {
    return this.http.delete(this.url+"/Delete/"+id).toPromise();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/usermodel.model';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  constructor(public userservice:UserService, private router:Router) { }

  ngOnInit(): void {
    
    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['Login']);
    }
  }

  onUserDelete(id : number)
  {
    this.userservice.deleteUser(id).then(res=>
      {
        this.userservice.getuser();
        this.router.navigate(['UserDetails']);
    });    

  }

  onUserUpdate()
  {
    this.userservice.updateUser().then(res=>
      {
        this.userservice.getuser();
        this.router.navigate(['UserDetails']);
    });    

  }

}

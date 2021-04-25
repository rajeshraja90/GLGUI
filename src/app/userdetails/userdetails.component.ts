import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/usermodel.model';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(public userservice:UserService,
    private router: Router) {
        
  }

  ngOnInit(): void {

    this.userservice.getuser(); 
  }

 onSelected(users :UserModel)
 {
   this.userservice.updateUserCollection = users;
   this.router.navigate(['UserUpdate']);
 }

}
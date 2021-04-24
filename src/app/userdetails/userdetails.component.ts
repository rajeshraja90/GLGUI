import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/usermodel.model';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(public userservice:UserService) {
        
  }

  ngOnInit(): void {

    this.userservice.getuser(); 
  }

 onSelected()
 {
   
 }

}
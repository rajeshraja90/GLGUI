import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router,private userservice: UserService) { }

  ngOnInit(): void {
    
    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['Login']);
    }
  }

  userid : number;
email:string;
  onAddUser(userdata : NgForm)
  {
      this.userservice.addUser(userdata.value).then(res =>{ 
      this.userservice.getuser();
      this.router.navigate(['UserDetails']);
    });
      
  }   
}


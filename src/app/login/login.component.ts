import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  username : string; 
  welcomeuser :string;
  onLogin(loginForm : NgForm)
  {
        
    this.authService.authUser(loginForm.value).then(
       res=>{this.username =res.email, this.welcomeuser=res.firstName +" "+res.lastName}       
    )
    if(this.username != null)
    {
      localStorage.setItem('token',this.welcomeuser); 
      this.router.navigate(['UserDetails']);
    }
  }

}

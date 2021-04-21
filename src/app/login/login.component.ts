import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

  onLogin(loginForm : NgForm)
  {
    localStorage.setItem('token',"username")    
    console.log(loginForm.value);

    this.router.navigate(['UserDetails']);

    const token=this.authService.authUser(loginForm.value);
    if(token)
    {
      localStorage.setItem('token',token.username)
      console.log("loginsuccess");
    }
  }

}

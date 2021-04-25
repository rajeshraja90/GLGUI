import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  constructor(public userservice:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onUserDelete(id : number)
  {
    this.userservice.deleteUser(id).then(res=>
      {
        this.userservice.getuser();
        this.router.navigate(['UserDetails']);
    });    

  }

}

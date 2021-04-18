import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  public users = [] as any;

  constructor() {
    this.users = [
      { id: 1, firstname: "Rajesh", lastname: "Khan", email: "rajesh@rk.com" },
      { id: 2, firstname: "Samir", lastname: "David", email: "samir@rk.com" }
    ]
  }

  ngOnInit(): void {
  }

  trackByuserCode(users: any): number{
    return users.id;
  }

}
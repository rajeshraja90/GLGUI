import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  public tasks = [] as any;

  constructor() {
    this.tasks = [
      { id: 1, projectid: 1, userid: 1, details: "task1", status: "New" },
      { id: 2, projectid: 2, userid: 2, details: "task1", status: "New" }
    ]
  }

  ngOnInit(): void {
  }

  trackBytaskCode(tasks: any): number{
    return tasks.id;
  }

}

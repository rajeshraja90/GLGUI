import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from '../models/taskmodel.model';
import { TaskService } from '../services/taskservice.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

 constructor(public taskservice : TaskService, private router: Router)
 {}

  ngOnInit(): void {

    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['Login']);
    }

    this.taskservice.gettask(); 
  }

  onTaskSelected(tasks :TaskModel)
  {
    this.taskservice.updateTaskCollection=tasks;
    this.router.navigate(['TaskUpdate']);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../services/projectservice.service';
import { TaskService } from '../services/taskservice.service';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public projectService:ProjectService, public userService:UserService, 
    private taskService : TaskService, private router:Router) { }
  ngOnInit(): void {

    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['Login']);
    }
    this.projectService.getProjects();
    this.userService.getuser();

  }
  onAddTask(taskForm : NgForm)
  {
    this.taskService.addTask(taskForm.value).then(res =>{      
      this.taskService.gettask();
      this.router.navigate(['TaskDetails']);
     } 
    );

  }
  
}

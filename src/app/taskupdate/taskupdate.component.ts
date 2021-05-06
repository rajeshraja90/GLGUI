import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/projectservice.service';
import { TaskService } from '../services/taskservice.service';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.component.html',
  styleUrls: ['./taskupdate.component.css']
})
export class TaskupdateComponent implements OnInit {

  public listStatus = [] as any;

  constructor(public userService:UserService, public projectService:ProjectService,
    public taskService:TaskService, private router:Router) { 

    this.listStatus=[{id:"0",statusname : "New"},
    {id:"1",statusname : "InProgress"},
    {id:"2",statusname : "QA"},
    {id:"3",statusname : "Completed"},];  
    
    this.projectService.getProjects();
    this.userService.getuser();

    }   

  ngOnInit(): void {   
    
    if(!localStorage.getItem('token'))
    {
      this.router.navigate(['Login']);
    }
  }

  onTaskUpdate()
  {
    this.taskService.updateTask().then(res=>{
      this.taskService.gettask(); 
      this.router.navigate(['TaskDetails']);     
    }); 
  }

  onTaskDelete()
  {
    this.taskService.deleteTask(this.taskService.updateTaskCollection.id).subscribe(res=>{
      this.taskService.gettask(); 
      this.router.navigate(['TaskDetails']);     
    });    
  }

}

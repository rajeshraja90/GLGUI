import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectModel } from '../models/projectmodel.model';
import { ProjectService } from '../services/projectservice.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectservice : ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  projectid : number;

  onAddProject(projectForm : NgForm)
  {
     this.projectservice.addProject(projectForm.value).then(res =>{      
      this.projectservice.getProjects();
      this.router.navigate(['ProjectDetails']);
     } 

    );

  } 

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from '../models/projectmodel.model';
import { ProjectService } from '../services/projectservice.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  
  constructor(public projectservice : ProjectService, private router:Router) {
    
  }

  ngOnInit(): void {

    this.projectservice.getProjects();

  }

  onProjectSelected(project : ProjectModel)
  {
    this.projectservice.updateProjectCollection = project;
    this.router.navigate(['ProjectUpdate']);
  }

 
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from '../models/projectmodel.model';
import { ProjectService } from '../services/projectservice.service';

@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrls: ['./projectupdate.component.css']
})
export class ProjectupdateComponent implements OnInit {

  constructor(public projectservice : ProjectService, private router:Router) { }

  ngOnInit(): void {
  }

  onProjectDelete(id : number){

    this.projectservice.deleteProject(id).subscribe(res=>{
      this.projectservice.getProjects(); 
      this.router.navigate(['ProjectDetails']);     
    });    
    
  }

  onProjectUpdate(project : any)
  {    
    console.log(project.value);

  }

}

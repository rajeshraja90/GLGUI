import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  public projects = [] as any;

  constructor() {
    this.projects = [
      { id: 1, projectname: "Project 1", details: "This is project 1" },
      { id: 2, projectname: "Project 2", details: "This is project 2" }
    ]
  }

  ngOnInit(): void {
  }

  trackByprojectsCode(projects: any): number{
    return projects.id;
  }

}
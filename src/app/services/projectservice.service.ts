import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/projectmodel.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http :HttpClient) { }

  listProject : ProjectModel[];

  addprojectcollection : ProjectModel;

  updateProjectCollection :ProjectModel;

  url ="https://localhost:44303/api/project";

  getProjects()
  {    
    return this.http.get(this.url).toPromise().then(res=> this.listProject = res as ProjectModel[]);
  }

  addProject(data:any)
  {    
    this.addprojectcollection = data as ProjectModel;
    this.addprojectcollection.createdOn= new Date();
    return this.http.post(this.url,this.addprojectcollection).toPromise();

  }

  updateProject()
  {    
    return this.http.put(this.url,this.updateProjectCollection).toPromise();

  }

  deleteProject(id : number)
  {
    return this.http.delete(this.url+"/Delete/"+id);
  }


}

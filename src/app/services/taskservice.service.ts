import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from '../models/taskmodel.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  url ="https://localhost:44303/api/tasks";

  listtask :TaskModel[];
  addTaskCollection : TaskModel;
  updateTaskCollection : TaskModel;
      
  gettask()
  {  

   return this.http.get(this.url).toPromise().then(res=>this.listtask = res as TaskModel[]);

  }

  addTask(data:any)
  {    
    this.addTaskCollection = data as TaskModel;
    this.addTaskCollection.status="0";
    this.addTaskCollection.createdOn= new Date();
    return this.http.post(this.url,this.addTaskCollection).toPromise();

  }

  updateTask()
  {    
    return this.http.put(this.url,this.updateTaskCollection).toPromise();

  }

  deleteTask(id : number)
  {
    return this.http.delete(this.url+"/Delete/"+id);
  }

}

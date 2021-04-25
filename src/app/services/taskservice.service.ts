import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from '../models/taskmodel.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  listtask :TaskModel[];
      
  gettask()
  {
    let url ="https://localhost:44303/api/tasks";

   return this.http.get(url).toPromise().then(res=>this.listtask = res as TaskModel[]);

  }
}

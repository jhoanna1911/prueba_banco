import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http : HttpClient
  ) { }



  getAllTasks(){
    const path = "https://6ekpl2j42d.execute-api.us-east-2.amazonaws.com/test/prueba";
    return this.http.get<Task>(path);
  }
}

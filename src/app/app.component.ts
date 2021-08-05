import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-banco';
  nombre = '';
  nit = '';
  capa = '';
  segmento = '';
  usuario = '';
  ngOnInit() {
    this.getAllTasks()
  }

  constructor(
    private taskService: TaskService
  ) {}

  getAllTasks(){
    this.taskService.getAllTasks()
    .subscribe(tasks => {  
      this.nombre = (JSON.parse(JSON.stringify(tasks))).nombre;
      this.nit = (JSON.parse(JSON.stringify(tasks))).nit;
      this.capa = (JSON.parse(JSON.stringify(tasks))).capa;
      this.segmento = (JSON.parse(JSON.stringify(tasks))).segmento;
      this.usuario = (JSON.parse(JSON.stringify(tasks))).gerenteRelacion;
    })
  }
}

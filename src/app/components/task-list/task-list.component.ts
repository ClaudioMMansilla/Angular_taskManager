import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit{

  task1: ITask = {
    title: "task1",
    description: "description1",
    completed: false,
    level: Levels.Info
  };

  task2: ITask = {
    title: "task2",
    description: "description2",
    completed: true,
    level: Levels.Urgent
  };

  taskDestroyer(task: ITask){
    alert(`se procede a eliminar la tarea: ${task.title}`);
  }


  ngOnInit(): void {
    
  }
}

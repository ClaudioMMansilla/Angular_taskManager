import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit{

  @Input() task: ITask | undefined;
  @Output() taskToDelete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(){}

  ngOnInit(): void {
    
  }

  deleteTask(){
    this.taskToDelete.emit(this.task); // notifica al componente padre de cual objeto debe elimitar
  }
}

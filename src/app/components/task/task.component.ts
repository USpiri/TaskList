import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/serices/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskSvc: TaskService
  ) { }

  ngOnInit(): void {
    this.taskSvc.getTasks().subscribe(
      tasks => {
        this.tasks = tasks
      }
    );
  }

}

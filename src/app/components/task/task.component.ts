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

  deleteTask ( task: Task ){
    this.taskSvc.deleteTask(task).subscribe(
      () => {
        this.tasks = this.tasks.filter(
          t => t.id !== task.id
        )
      }
    );
  }

  toggleReminder( task:Task ){
    task.reminder = !task.reminder;
    this.taskSvc.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    console.log(task);
    this.taskSvc.addTask(task).subscribe(
      (task) => this.tasks.push(task)
    )
  }

}

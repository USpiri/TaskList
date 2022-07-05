import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task = TASKS[0];
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}

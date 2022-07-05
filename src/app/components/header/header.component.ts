import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string = "Task List";
  showAddTask:boolean = false;
  suscription?:Subscription

  constructor(
    private uiSvc:UiService,
    private router:Router
  ) { 
    this.suscription = this.uiSvc.onToggle().subscribe(
      value => this.showAddTask = value
    );
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiSvc.toogleAddTask();
  }

  hasRoute(router:string){
    return this.router.url === router
  }

}

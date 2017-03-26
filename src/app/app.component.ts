import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private successList:Job[]=[new Job(1,"SleepBuilder"),new Job(2, "Monitor")];
  private failureList:Job[]=[new Job(2, "Infraestructure Process"), new Job(4, "Disabler")];

  
  title = 'Jenkins Infraestructure Monitor';
  title2 = 'Success list'
  title3 = 'Failure list'
}

export class Job {

  private nExecution:number;
  private name:string;

  constructor (nExecution:number, name:string){
    this.name=name;
    this.nExecution=nExecution;
  }
}

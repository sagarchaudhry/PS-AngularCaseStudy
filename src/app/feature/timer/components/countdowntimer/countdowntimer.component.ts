import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css']
})
export class CountdowntimerComponent implements OnInit {

  titleCount:string="Count Down timer";
  constructor() { }

  @Input() currentTime!: number;  
  
  ngOnInit(): void {
  }
  

}

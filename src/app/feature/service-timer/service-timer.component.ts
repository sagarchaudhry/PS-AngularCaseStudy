import { Component, OnInit } from '@angular/core';
import { ServiceTimerService } from './service-timer.service';

@Component({
  selector: 'app-service-timer',
  templateUrl: './service-timer.component.html',
  styleUrls: ['./service-timer.component.css'],
  providers: [ServiceTimerService]
})
export class ServiceTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

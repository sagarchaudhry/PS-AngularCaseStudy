import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css']
})
export class CountdowntimerComponent implements OnInit, OnDestroy {

  constructor(private serviceTimerService: ServiceTimerService) { }
  titleCount: string = "Count Down timer";
  currentTime!: number;
  currentTimeSubscriber: any;
  ngOnInit(): void {
    this.currentTimeSubscriber = this.serviceTimerService.currentTimer.subscribe(
      (value: number) => {
        this.currentTime = value;
      }
    )
  }
  ngOnDestroy() {
    this.currentTimeSubscriber.unsubscribe();
  }
}

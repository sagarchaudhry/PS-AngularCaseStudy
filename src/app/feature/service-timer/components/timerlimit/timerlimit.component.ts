import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
  styleUrls: ['./timerlimit.component.css']
})
export class TimerlimitComponent implements OnInit, OnDestroy {

  timerLimitInput = null;
  pausedTimeCollection: any = [];
  pausedTimeSubscriber: any;
  startButton: boolean = false;
  pauseButton: boolean = false;

  constructor(private serviceTimerService: ServiceTimerService) {

  }

  ngOnInit() {
    this.pausedTimeSubscriber = this.serviceTimerService.pausedTimeCollection.subscribe(
      (value: string) => {
        if (value === undefined) {
          this.pausedTimeCollection.length = 0;
        } else {
          this.pausedTimeCollection.push(value);
        }

      }
    )
  }

  startTimer(limit: any) {
    this.serviceTimerService.getTimerLimitValue(limit);
    if (limit != null) {
      this.startButton = true;
      this.pauseButton = false;
    }
  }
  pauseTimer() {
    this.serviceTimerService.getPausedCount(true);
    if (this.timerLimitInput != null && this.startButton === true) {
      this.startButton = false;
      this.pauseButton = true;
    }
  }
  resetTimer() {
    this.timerLimitInput = null;
    this.serviceTimerService.getResetTimer(true);
    this.startButton = false;
    this.pauseButton = false;
  }

  ngOnDestroy() {
    this.pausedTimeSubscriber.unsubscribe();
  }
}

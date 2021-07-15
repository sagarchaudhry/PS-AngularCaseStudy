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
  }
  pauseTimer() {
    this.serviceTimerService.getPausedCount(true);
  }
  resetTimer() {
    this.timerLimitInput = null;
    this.serviceTimerService.getResetTimer(true);
  }

  ngOnDestroy() {
    this.pausedTimeSubscriber.unsubscribe();
  }
}

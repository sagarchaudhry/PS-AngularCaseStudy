import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTimerService {

  constructor(private datePipe: DatePipe) { }
  currentTimer = new Subject<number>();
  timerLimitValue: any = null;
  pauseCount = new Subject<number>();
  startCount = new Subject<number>();
  startCountValue = 0;
  pauseCountValue = 0;
  timeStampsArray = new Subject<string>();
  pausedTimeCollection = new Subject<string>();
  timerInterval: any;
  currentState: string = "not started";
  timerFinalValue = null;

  getTimerLimitValue(ev: any) {
    this.timerFinalValue = ev;
    if (this.currentState == 'paused') {
      this.startTimer();
    }
    else if (this.currentState == 'not started' && this.timerFinalValue) {
      this.resetEverthing();
      this.timerLimitValue = this.timerFinalValue;
      this.startTimer();

    }


  }
  startTimer() {
    this.currentTimer.next(this.timerLimitValue);
    this.startCountValue += 1
    this.startCount.next(this.startCountValue);
    this.timeStampsArray.next(`started at ${this.datePipe.transform(new Date, 'medium')}`);
    this.currentState = 'started';
    this.timerInterval = setInterval(() => {
      if (this.timerLimitValue <= 0) {
        clearInterval(this.timerInterval);
      } else {
        this.timerLimitValue--;
        this.currentTimer.next(this.timerLimitValue);
      }
    }, 1000);
  }

  getPausedCount(ev: any) {
    if (this.currentState == 'started') {
      clearInterval(this.timerInterval);
      this.timeStampsArray.next(`paused at ${this.datePipe.transform(new Date, 'medium')}`);
      this.pauseCountValue += 1;
      this.pauseCount.next(this.pauseCountValue)
      this.pausedTimeCollection.next(this.timerLimitValue);
      this.currentState = 'paused';
    }
  }
  getResetTimer(ev: any) {
    this.timerLimitValue = null;
    this.currentTimer.next(this.timerLimitValue);
    this.resetEverthing();
    clearInterval(this.timerInterval);
    this.currentState = 'not started';

  }
  resetEverthing() {
    this.pauseCount.next(0);
    this.startCount.next(0);
    this.pausedTimeCollection.next(undefined);
    this.timeStampsArray.next(undefined);
  }
}

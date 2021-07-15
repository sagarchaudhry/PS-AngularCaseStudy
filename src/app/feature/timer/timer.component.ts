import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }
  currentTimer!: any;
  timerLimitValue: any = null;
  pauseCount: number = 0;
  startCount: number = 0;
  timeStampsArray: any = [];
  pausedTimeCollection: any = [];
  timerInterval: any;
  currentState: string = "not started";
  timerFinalValue = null;

  ngOnInit(): void {
  }

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
    this.startCount += 1;
    this.timeStampsArray.push(`started at ${this.datePipe.transform(new Date, 'medium')}`);
    this.currentState = 'started';
    this.timerInterval = setInterval(() => {
      if (this.timerLimitValue <= 0) {
        clearInterval(this.timerInterval);
        this.currentState = "not started";
      } else {
        this.timerLimitValue--;
      }
    }, 1000);
  }

  getPausedCount(ev: any) {
    if (this.currentState == 'started') {
      clearInterval(this.timerInterval);
      this.timeStampsArray.push(`paused at ${this.datePipe.transform(new Date, 'medium')}`);
      this.pauseCount += 1;
      this.pausedTimeCollection.push(this.timerLimitValue);
      this.currentState = 'paused';
    }
  }
  getResetTimer(ev: any) {
    this.resetEverthing();
    clearInterval(this.timerInterval);
    this.currentState = 'not started';
    this.timerLimitValue = null;
  }
  resetEverthing() {
    this.pauseCount = 0;
    this.startCount = 0;
    this.timeStampsArray.length = 0;
    this.pausedTimeCollection.length = 0;

  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
  styleUrls: ['./timerlimit.component.css']
})
export class TimerlimitComponent {
  timerLimitInput = null;
  currentTimerStatus: any = {}
  startButton: boolean = false;
  pauseButton: boolean = false;
  constructor() { }

  @Output() timerLimit = new EventEmitter<number>();
  @Output() pauseTimerStatus = new EventEmitter<boolean>();
  @Output() resetCompleteTimer = new EventEmitter<boolean>();
  @Input() pausedTimeCollection: any;

  startTimer(limit: any) {
    this.timerLimit.emit(limit);
    if (limit != null) {
      this.startButton = true;
      this.pauseButton = false;
    }

  }
  pauseTimer() {
    this.pauseTimerStatus.emit(true);
    if (this.timerLimitInput != null && this.startButton === true) {
      this.startButton = false;
      this.pauseButton = true;
    }

  }
  resetTimer() {
    this.timerLimitInput = null;
    this.resetCompleteTimer.emit(true);
    this.startButton = false;
    this.pauseButton = false;
  }

}

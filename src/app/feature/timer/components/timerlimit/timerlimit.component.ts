import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
  styleUrls: ['./timerlimit.component.css']
})
export class TimerlimitComponent {
  timerLimitInput = null;
  currentTimerStatus: any = {}
  constructor() { }

  @Output() timerLimit = new EventEmitter<number>();
  @Output() pauseTimerStatus = new EventEmitter<boolean>();
  @Output() resetCompleteTimer = new EventEmitter<boolean>();
  @Input() pausedTimeCollection: any;

  startTimer(limit: any) {
    this.timerLimit.emit(limit);
  }
  pauseTimer() {
    this.pauseTimerStatus.emit(true);
  }
  resetTimer() {
    this.timerLimitInput = null;
    this.resetCompleteTimer.emit(true);
  }

}

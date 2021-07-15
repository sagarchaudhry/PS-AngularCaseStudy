import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-clickcount',
  templateUrl: './clickcount.component.html',
  styleUrls: ['./clickcount.component.css']
})
export class ClickcountComponent implements OnInit, OnDestroy {

  constructor(private serviceTimerService: ServiceTimerService) { }
  startCount: any = 0;
  pauseCount: any = 0;
  startCountSubscriber: any;
  pauseCountSubscriber: any;
  ngOnInit(): void {
    this.startCountSubscriber = this.serviceTimerService.startCount.subscribe(
      (value: number) => {
        this.startCount = value;
      }
    )
    this.pauseCountSubscriber = this.serviceTimerService.pauseCount.subscribe(
      (value: number) => {
        this.pauseCount = value;
      }
    )
  }
  ngOnDestroy() {
    this.startCountSubscriber.unsubscribe();
    this.pauseCountSubscriber.unsubscribe();
  }
}

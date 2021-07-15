import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.css']
})
export class TimestampsComponent implements OnInit, OnDestroy {
  timeStamps: any = [];
  timeStampSubscriber: any;
  constructor(private serviceTimerService: ServiceTimerService) { }

  ngOnInit(): void {
    this.timeStampSubscriber = this.serviceTimerService.timeStampsArray.subscribe(
      (value: string) => {
        if (value === undefined) {
          this.timeStamps.length = 0;
        } else {
          this.timeStamps.push(value);
        }

      }
    )
  }
  ngOnDestroy() {
    this.timeStampSubscriber.unsubscribe();
  }

}

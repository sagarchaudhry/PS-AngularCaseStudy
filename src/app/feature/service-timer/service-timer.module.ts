import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ServiceTimerComponent } from './service-timer.component';
import { ServiceTimerRoutingModule } from './service-timer-routing.module';
import { ClickcountComponent } from './components/clickcount/clickcount.component';
import { CountdowntimerComponent } from './components/countdowntimer/countdowntimer.component';
import { TimerlimitComponent } from './components/timerlimit/timerlimit.component';
import { TimestampsComponent } from './components/timestamps/timestamps.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServiceTimerComponent,
    ClickcountComponent,
    CountdowntimerComponent,
    TimerlimitComponent,
    TimestampsComponent
  ],
  imports: [
    CommonModule,
    ServiceTimerRoutingModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class ServiceTimerModule { }

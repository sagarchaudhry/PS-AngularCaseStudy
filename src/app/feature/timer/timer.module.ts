import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { ClickcountComponent } from './components/clickcount/clickcount.component';
import { CountdowntimerComponent } from './components/countdowntimer/countdowntimer.component';
import { TimerlimitComponent } from './components/timerlimit/timerlimit.component';
import { TimestampsComponent } from './components/timestamps/timestamps.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TimerComponent,
    ClickcountComponent,
    CountdowntimerComponent,
    TimerlimitComponent,
    TimestampsComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class TimerModule { }

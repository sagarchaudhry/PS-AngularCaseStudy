import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsService } from './students.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule
  ],
  providers: [StudentsService]
})
export class StudentsModule { }

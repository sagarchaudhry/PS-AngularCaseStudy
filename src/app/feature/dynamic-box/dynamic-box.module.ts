import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicBoxComponent } from './dynamic-box.component';
import { DynamicBoxRoutingModule } from './dynamic-box-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    DynamicBoxComponent
  ],
  imports: [
    CommonModule,
    DynamicBoxRoutingModule,
    ScrollingModule
  ]
})
export class DynamicBoxModule { }

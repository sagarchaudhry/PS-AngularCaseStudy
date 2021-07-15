import { NgModule } from '@angular/core';
import { DynamicBoxComponent } from './dynamic-box.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:  DynamicBoxComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicBoxRoutingModule { }

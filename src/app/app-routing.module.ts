import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'banner',
    loadChildren: () => import('../app/feature/banner/banner.module').then((m) => { return m.BannerModule })
  },
  {
    path: 'timer',
    loadChildren: () => import('../app/feature/timer/timer.module').then((m) => { return m.TimerModule })
  },
  {
    path: 'service-timer',
    loadChildren: () => import('../app/feature/service-timer/service-timer.module').then((m) => { return m.ServiceTimerModule })
  },
  {
    path: 'students',
    loadChildren: () => import('../app/feature/students/students.module').then((m) => { return m.StudentsModule })
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./feature/e-commerce/e-commerce.module').then((m) => { return m.EcommerceModule })
  },
  {
    path: 'dynamic-box',
    loadChildren: () => import('../app/feature/dynamic-box/dynamic-box.module').then((m) => { return m.DynamicBoxModule })
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

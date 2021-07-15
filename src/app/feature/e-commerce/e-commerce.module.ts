import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceComponent } from './e-commerce.component';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { FormsModule } from '@angular/forms';
import { ECommerceService } from './e-commerce.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ECommerceService]
})
export class EcommerceModule { }

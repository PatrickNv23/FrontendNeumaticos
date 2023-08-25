import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayoutComponent } from './payout.component';
import { PayoutRoutingModule } from './payout-routing.module';



@NgModule({
  declarations: [
    PayoutComponent
  ],
  imports: [
    CommonModule,
    PayoutRoutingModule
  ]
})
export class PayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeOrderListComponent } from './exchange-order-list/exchange-order-list.component';


@NgModule({
  declarations: [
    ExchangeOrderListComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule
  ]
})
export class ExchangeModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExchangeComponent} from "./exchange.component";
import {ExchangeOrderListComponent} from "./exchange-order-list/exchange-order-list.component";
import {ExchangeOrderDetailComponent} from "./exchange-order-detail/exchange-order-detail.component";
import {ExchangeOrderDetailResolver} from "./helper/resolver/exchange-order-detail.resolver";

const routes: Routes = [
  {
    path: '',
    component: ExchangeComponent,
    children: [
      {path: '', redirectTo: 'exchange-list', pathMatch: 'full'},
      {
        path: 'exchange-list',
        component: ExchangeOrderListComponent,
        data: {title: 'Admin Dashboard - Exchange Order'},
      },
      {
        path: 'exchange-order/:id',
        component: ExchangeOrderDetailComponent,
        data: { title: 'Admin Dashboard - Exchange Order Detail' },
        resolve: [
            ExchangeOrderDetailResolver
        ]
      },
      // {
      //   path: 'packages',
      //   component: InterconnectPackageComponent,
      //   data: {title: 'vServer Portal - Interconnect Packages'},
      // }
    ]
  }, {
    path: '**', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }

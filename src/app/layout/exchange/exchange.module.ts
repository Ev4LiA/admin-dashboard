import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeOrderListComponent } from './exchange-order-list/exchange-order-list.component';
import { ExchangeComponent } from './exchange.component';
import { ExchangeOrderDetailComponent } from './exchange-order-detail/exchange-order-detail.component';
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ExchangeOrderListComponent,
    ExchangeComponent,
    ExchangeOrderDetailComponent
  ],
    imports: [
        CommonModule,
        ExchangeRoutingModule,
        MatTableModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTabsModule,
        MatGridListModule,
        MatCardModule
    ]
})
export class ExchangeModule { }

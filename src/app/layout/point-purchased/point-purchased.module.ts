import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointPurchasedComponent } from './point-purchased.component';
import { PointPurchasedListComponent } from './point-purchased-list/point-purchased-list.component';
import { PointPurchasedDetailComponent } from './point-purchased-detail/point-purchased-detail.component';



@NgModule({
  declarations: [
    PointPurchasedComponent,
    PointPurchasedListComponent,
    PointPurchasedDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PointPurchasedModule { }

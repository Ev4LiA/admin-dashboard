import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubRoutingModule } from './hub-routing.module';
import { HubListComponent } from './hub-list/hub-list.component';
import { HubComponent } from './hub.component';
import { HubDetailComponent } from './hub-detail/hub-detail.component';


@NgModule({
  declarations: [
    HubListComponent,
    HubComponent,
    HubDetailComponent
  ],
  imports: [
    CommonModule,
    HubRoutingModule
  ]
})
export class HubModule { }

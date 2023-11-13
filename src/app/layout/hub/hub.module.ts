import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubRoutingModule } from './hub-routing.module';
import { HubListComponent } from './hub-list/hub-list.component';
import { HubComponent } from './hub.component';


@NgModule({
  declarations: [
    HubListComponent,
    HubComponent
  ],
  imports: [
    CommonModule,
    HubRoutingModule
  ]
})
export class HubModule { }

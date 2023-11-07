import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubRoutingModule } from './hub-routing.module';
import { HubListComponent } from './hub-list/hub-list.component';


@NgModule({
  declarations: [
    HubListComponent
  ],
  imports: [
    CommonModule,
    HubRoutingModule
  ]
})
export class HubModule { }

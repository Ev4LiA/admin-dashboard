import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldBookRoutingModule } from './old-book-routing.module';
import { OldBookListComponent } from './old-book-list/old-book-list.component';


@NgModule({
  declarations: [
    OldBookListComponent
  ],
  imports: [
    CommonModule,
    OldBookRoutingModule
  ]
})
export class OldBookModule { }

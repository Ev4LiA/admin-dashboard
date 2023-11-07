import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {LayoutRoutingModule} from "./layout-routing.module";
import {NotFoundComponent} from "./not-found/not-found.component";


@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }

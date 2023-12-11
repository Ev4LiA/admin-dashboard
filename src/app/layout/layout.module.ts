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
import {OverviewComponent} from './overview/overview.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "@angular/fire/auth";
import {FirebaseAppModule} from "@angular/fire/app";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HighchartsChartModule} from "highcharts-angular";


@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    OverviewComponent,
    LoginComponent,
  ],
  exports: [
    LayoutComponent
  ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        LayoutRoutingModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        FirebaseAppModule,
        AuthModule,
        HighchartsChartModule
    ],
  providers: []
})
export class LayoutModule { }

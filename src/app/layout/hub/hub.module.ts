import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HubRoutingModule} from './hub-routing.module';
import {HubListComponent} from './hub-list/hub-list.component';
import {HubComponent} from './hub.component';
import {HubDetailComponent} from './hub-detail/hub-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {SharedModule} from "../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";


@NgModule({
    declarations: [
        HubListComponent,
        HubComponent,
        HubDetailComponent,
    ],
    imports: [
        CommonModule,
        HubRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        SharedModule,
        MatTableModule,
    ]
})
export class HubModule {
}

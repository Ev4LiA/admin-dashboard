import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldBookRoutingModule } from './old-book-routing.module';
import { OldBookListComponent } from './old-book-list/old-book-list.component';
import { OldBookComponent } from './old-book.component';
import { OldBookDetailComponent } from './old-book-detail/old-book-detail.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { HistoryModalComponent } from './helper/history-modal/history-modal.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    OldBookListComponent,
    OldBookComponent,
    OldBookDetailComponent,
    HistoryModalComponent
  ],
    imports: [
        CommonModule,
        OldBookRoutingModule,
        MatProgressSpinnerModule,
        MatTableModule,
        SharedModule,
        FormsModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule
    ]
})
export class OldBookModule { }

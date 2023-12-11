import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookPurchasedComponent} from './book-purchased.component';
import {BookPurchasedListComponent} from './book-purchased-list/book-purchased-list.component';
import {BookPurchasedDetailComponent} from './book-purchased-detail/book-purchased-detail.component';
import {BookPurchasedRoutingModule} from "./book-purchased-routing.module";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        BookPurchasedComponent,
        BookPurchasedListComponent,
        BookPurchasedDetailComponent,
    ],
    imports: [
        CommonModule,
        BookPurchasedRoutingModule,
        MatTableModule,
        SharedModule
    ]
})
export class BookPurchasedModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookPurchasedListComponent} from "./book-purchased-list/book-purchased-list.component";
import {BookPurchasedDetailComponent} from "./book-purchased-detail/book-purchased-detail.component";
import {BookPurchasedComponent} from "./book-purchased.component";

const routes: Routes = [
    {
        path: '',
        component: BookPurchasedComponent,
        children: [
            {path: '', redirectTo: 'book-purchased-list', pathMatch: 'full'},
            {
                path: 'book-purchased-list',
                component: BookPurchasedListComponent,
                data: {title: 'Admin Dashboard - Book Purchased Order'},
            },
            {
                path: 'book-purchased/:id',
                component: BookPurchasedDetailComponent,
                data: {title: 'Admin Dashboard - Book Purchased Order Detail'},
            },
            // {
            //   path: 'packages',
            //   component: InterconnectPackageComponent,
            //   data: {title: 'vServer Portal - Interconnect Packages'},
            // }
        ]
    }, {
        path: '**', redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookPurchasedRoutingModule {
}

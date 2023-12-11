import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PointPurchasedComponent} from "./point-purchased.component";
import {PointPurchasedListComponent} from "./point-purchased-list/point-purchased-list.component";
import {PointPurchasedDetailComponent} from "./point-purchased-detail/point-purchased-detail.component";

const routes: Routes = [
    {
        path: '',
        component: PointPurchasedComponent,
        children: [
            {path: '', redirectTo: 'point-purchased-list', pathMatch: 'full'},
            {
                path: 'book-purchased-list',
                component: PointPurchasedListComponent,
                data: {title: 'Admin Dashboard - Point Purchase Order'},
            },
            {
                path: 'book-purchased/:id',
                component: PointPurchasedDetailComponent,
                data: {title: 'Admin Dashboard - Point Purchase Order Detail'},
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
export class PointPurchasedRoutingModule {
}

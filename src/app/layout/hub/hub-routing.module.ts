import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HubComponent} from "./hub.component";
import {HubListComponent} from "./hub-list/hub-list.component";
import {HubDetailComponent} from "./hub-detail/hub-detail.component";
import {HubDetailResolver} from "./helper/resolver/hub-detail.resolver";

const routes: Routes = [
    {
        path: '',
        component: HubComponent,
        children: [
            {path: '', redirectTo: 'hub-list', pathMatch: 'full'},
            {
                path: 'hub-list',
                component: HubListComponent,
                data: {title: 'Admin Dashboard - Hub'}
            },
            {
                path: '/:id',
                component: HubDetailComponent,
                data: {title: 'Admin Dashboard - Hub Detail'},
                resolve: [
                    HubDetailResolver
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HubRoutingModule { }

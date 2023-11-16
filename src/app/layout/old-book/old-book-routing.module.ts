import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OldBookComponent} from "./old-book.component";
import {OldBookListComponent} from "./old-book-list/old-book-list.component";
import {OldBookDetailComponent} from "./old-book-detail/old-book-detail.component";
import {OldBookDetailResolver} from "./helper/resolver/old-book-detail.resolver";

const routes: Routes = [
  {
    path: '',
    component: OldBookComponent,
    children: [
      {path: '', redirectTo: 'old-book-list', pathMatch: 'full'},
      {
        path: 'old-book-list',
        component: OldBookListComponent,
        data: {title: 'Admin Dashboard - Old Book List'},
      },
      {
        path: 'old-book-detail/:id',
        component: OldBookDetailComponent,
        data: {title: 'Admin Dashboard - Old Book Detail'},
        resolve: [
          OldBookDetailResolver
        ]
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
export class OldBookRoutingModule { }

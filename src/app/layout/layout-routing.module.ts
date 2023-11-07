import {LayoutComponent} from "./layout.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    data: {
    },
    resolve: {
    },
    children: [
      {
        path: '',
        component: OverviewComponent,
        data: {title: 'vServer Portal - Overview'}
      },
      {
        path: 'overview',
        resolve: {layoutResolver: LayoutResolver},
        canActivate: [AuthGuard],
        component: OverviewComponent,
        data: {title: 'vServer Portal - Overview'}
      },
      {
        path: 'limit',
        canActivate: [CombinedGuardGuard],
        data: {
          guards: guards,
        },
        loadChildren: () => import('./limit/limit.module').then(m => m.LimitModule)
      },
    ],
  },
  {
    path: '404',
    canActivate: [],
    component: NotFoundComponent, data: {title: 'Bookworm Dashboard - Not found'}
  },
  // {path: 'log-in', component: LocalLogInComponent},
  // {path: 'login', component: LoginInitiationComponent, data: {title: 'Login'}},
  // {path: 'error', component: ErrorPageComponent, data: {title: 'vServer Portal - Error'}},
  {path: '**', redirectTo: '404'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}

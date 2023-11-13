import {LayoutComponent} from "./layout.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./not-found/not-found.component";
import {OverviewComponent} from "./overview/overview.component";
import {AuthGuard} from "../shared/auth/guard/auth.guard";
import {LoginComponent} from "./login/login.component";
import {SecureInnerPageGuard} from "../shared/auth/guard/secure-inner-page.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: {
    },
    resolve: {
    },
    children: [
      {
        path: '',
        component: OverviewComponent,
        canActivate: [SecureInnerPageGuard],
        data: {title: 'Admin Dashboard - Overview'}
      },
      {
        path: 'overview',
        component: OverviewComponent,
        canActivate: [SecureInnerPageGuard],
        data: {title: 'Admin Dashboard - Overview'}
      },
      {
        path: 'users',
        canActivate: [SecureInnerPageGuard],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'books',
        canActivate: [SecureInnerPageGuard],
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
      },
      {
        path: 'exchange',
        canActivate: [SecureInnerPageGuard],
        loadChildren: () => import('./exchange/exchange.module').then(m => m.ExchangeModule)
      },
      {
        path: 'old-books',
        canActivate: [SecureInnerPageGuard],
        loadChildren: () => import('./old-book/old-book.module').then(m => m.OldBookModule)
      },
    ],
  },
  {
    path: '404',
    canActivate: [],
    component: NotFoundComponent, data: {title: 'Bookworm Dashboard - Not found'}
  },
  // {path: 'log-in', component: LocalLogInComponent},
  {path: 'login', canActivate:[], component: LoginComponent, data: {title: 'Login'}},
  // {path: 'error', component: ErrorPageComponent, data: {title: 'vServer Portal - Error'}},
  {path: '**', redirectTo: '404'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}

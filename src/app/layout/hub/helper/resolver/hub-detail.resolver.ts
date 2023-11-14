import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {AdminExchangeService} from "../../../../shared/service/admin-exchange.service";

@Injectable({
    providedIn: 'root'
})
export class HubDetailResolver implements Resolve<any> {
    constructor(private adminService: AdminExchangeService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        let id: string = route.paramMap.get('id');
        return this.adminService.getExchangeOrderDetail(id).pipe(
            map((res) => {
                if (res) {
                    return {
                        data: res,
                        error: null
                    }
                } else {
                    this.router.navigate(['/404'])
                    return null;
                }
            }), catchError((error: any) =>
                throwError(() => new Error(error.message))
            )
        )
    }
}

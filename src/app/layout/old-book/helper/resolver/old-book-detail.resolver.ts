import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {AdminOldBookService} from "../../../../shared/service/admin-old-book.service";

@Injectable({
    providedIn: 'root'
})
export class OldBookDetailResolver implements Resolve<any> {
    constructor(private adminService: AdminOldBookService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        let id: string = route.paramMap.get('id');
        return this.adminService.getOldBookDetail(id).pipe(
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

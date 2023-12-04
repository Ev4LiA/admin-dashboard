import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {HubService} from "../../../../shared/service/hub.service";

@Injectable({
    providedIn: 'root'
})
export class HubDetailResolver implements Resolve<any> {
    constructor(private hubService: HubService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        let id: string = route.paramMap.get('id');
        return this.hubService.getHubDetail(id).pipe(
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

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {catchError, map, timeout} from "rxjs/operators";
import {AuthService} from "../auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private timeOut = 1000 * 60 * 2;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    console.log('API Service');
  }


  /**Handle while api response error */
  private formatErrors({error, toastId}: { error: HttpErrorResponse, toastId: string }) {
    return throwError(error);
  }

  private genHeaders(): HttpHeaders {
    if (!this.authService.verifyIdToken()) {
      this.authService.getIdToken();
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('id_token')}`
      // Add other headers as needed
    });
  }

  /**Redirect to page login */
  navigateLogin() {
    this.router.navigate(['/login']);
  }

  /**Method get */
  get({path, params, toastId}: { path: string; params?: HttpParams; toastId?: string; }): Observable<any> {
    const headers = this.genHeaders();
    return this.httpClient.get(
      path, {params, headers}
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => res)
    );
  }

  /**Method put */
  put({path, body, toastId}: { path: string; body: Object; toastId?: string; }): Observable<any> {
    const headers = this.genHeaders();
    return this.httpClient.put(
      `${path}`,
      JSON.stringify(body),
      {headers}
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        return this.formatErrors({error: err, toastId: toastId})
      })
    );
  }

  /**Method patch */
  patch({path, body, toastId}: { path: string; body: Object; toastId?: string; }): Observable<any> {
    const headers = this.genHeaders();

    return this.httpClient.patch(
      `${path}`,
      JSON.stringify(body),
      {headers}
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        return this.formatErrors({error: err, toastId: toastId})
      })
    );
  }

  /**Method post */
  post({path, body, toastId}: { path: string; body: Object; toastId?: string; }): Observable<any> {
    const headers = this.genHeaders();

    return this.httpClient.post(
      `${path}`,
      JSON.stringify(body),
      {headers}
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => {
        return res;
      }),
      catchError(err => this.formatErrors({error: err, toastId: toastId}))
    );
  }

  /**Method delete */
  delete({path, params, toastId}: { path: string; params?: HttpParams; toastId?: string }): Observable<any> {
    const headers = this.genHeaders();

    return this.httpClient.delete(
      `${path}`,
      {
        params: params,
        headers
      }
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => {
        return res;
      }),
      catchError(err => this.formatErrors({error: err, toastId: toastId}))
    );
  }

  /**Method delete body*/
  customDelete({path, body, toastId}: { path: string; body?: Object; toastId?: string; }): Observable<any> {
    const headers = this.genHeaders();

    return this.httpClient.delete(
      `${path}`,
      {
        body: JSON.stringify(body),
        headers
      }
    ).pipe(
      timeout(this.timeOut),
      map((res: Response) => {
        return res;
      }),
      catchError(err => this.formatErrors({error: err, toastId: toastId}))
    );
  }
}

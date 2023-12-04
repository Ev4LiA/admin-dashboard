import {Injectable} from '@angular/core';
import {from, mergeMap, Observable, tap, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import * as moment from "moment";
import {jwtDecode} from "jwt-decode";
import {signOut} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router) {
  }

  signIn(params: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email, params.password
    )).pipe(
      tap(res => {
        this.setSession(res.user)
      }),
      catchError((error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  signOut() {
    // Write a sign out function
      localStorage.clear();
      this.router.navigate(['/login'])
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.exp, 'second');

    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem("refresh_token", JSON.stringify(authResult.refreshToken));

    return from(authResult.getIdToken(true)).subscribe({
      next: (value: string) => localStorage.setItem('id_token', value),
      error: err => console.log(err)
    });
  }

  recoverPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email)).pipe(
      catchError((error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  verifyIdToken(): boolean {
    const idToken = localStorage.getItem('id_token');
    if (idToken == null) {
      return false;
    }
    const user: User = jwtDecode(idToken);
    // Timestamp in second, while the Date.now() return in millisecond
    return user.exp * 1000 > Date.now();
  }

  getIdToken() {
    from(this.auth.currentUser).pipe(
      mergeMap((user) => {
        if (user) {
          return user.getIdToken(true);
        } else {
          throw new Error('User not signed in.');
        }
      }), catchError((error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error))))
    ).subscribe({
      next: value => localStorage.setItem('id_token', value),
      error: err => console.log(err)
    })
  }

  private translateFirebaseErrorMessage({code, message}: FirebaseError) {
    if (code === "auth/user-not-found") {
      return "User not found.";
    }
    if (code === "auth/wrong-password") {
      return "User not found.";
    }
    return message;
  }

}

type SignIn = {
  email: string;
  password: string;
}

type FirebaseError = {
  code: string;
  message: string
};

type User = {
  aud: string
  auth_time: number;
  email: string
  email_verified: boolean;
  // expiration Time
  exp: number;
  role: string;
  user_id: string;
}

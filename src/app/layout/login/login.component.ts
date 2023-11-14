import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth/services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {interval} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    form!: FormGroup;
    isLoggingIn = false;
    isRecoveringPassword = false;

    constructor(
        private authenticationService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    login() {
        this.isLoggingIn = true;

        this.authenticationService.signIn({
            email: this.form.value.email,
            password: this.form.value.password
        }).pipe(

        ).subscribe({
            next: () => {
                const subscription$ = interval(2000)
                    .subscribe({
                    next: val => this.router.navigate(['overview'])
                })
                setTimeout(() => subscription$.unsubscribe(), 3000)
            },
            error: error => {
                this.isLoggingIn = false;
                this.snackBar.open(error.message, "OK", {
                    duration: 5000
                })
            }
        });
    }

    recoverPassword() {
        this.isRecoveringPassword = true;

        this.authenticationService.recoverPassword(
            this.form.value.email
        ).subscribe({
            next: () => {
                this.isRecoveringPassword = false;
                this.snackBar.open("You can recover your password in your email account.", "OK", {
                    duration: 5000
                });
            },
            error: error => {
                this.isRecoveringPassword = false;
                this.snackBar.open(error.message, "OK", {
                    duration: 5000
                });
            }
        })
    }

}

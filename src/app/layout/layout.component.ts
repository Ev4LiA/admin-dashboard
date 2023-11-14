import {Component, inject, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {filter, Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthService} from "../shared/auth/services/auth.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    private breakpointObserver = inject(BreakpointObserver);
    private authService = inject(AuthService);

    showExchangeDropdown = false;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    ngOnInit() {
    }

    signOut() {
        this.authService.signOut();
    }


    toggleExchangeDropdown() {
        this.showExchangeDropdown = !this.showExchangeDropdown;
    }
}

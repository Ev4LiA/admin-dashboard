import {Component, inject, OnInit} from '@angular/core';
import {HubService} from "../../../shared/service/hub.service";
import {HubModel} from "../helper/model/Hub.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-hub-list',
    templateUrl: './hub-list.component.html',
    styleUrls: ['./hub-list.component.scss']
})
export class HubListComponent implements OnInit {
    private hubService = inject(HubService);
    private router = inject(Router);

    isLoadingHub: boolean = true;
    hubList: HubModel[] = [];

    ngOnInit() {
        this.isLoadingHub = true;
        this.hubService.listAllHub().subscribe({
            next: (data) => this.hubList = data,
            error: (error) => console.log(error)
        }).add(() => this.isLoadingHub = false);
    }

    showHubInfo(hub: HubModel) {
        this.router.navigate(['/hub/hub-detail', hub.uuid]);
    }
}

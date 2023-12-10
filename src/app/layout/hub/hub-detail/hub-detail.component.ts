import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HubDetailModel} from "../helper/model/HubDetail.model";

@Component({
    selector: 'app-hub-detail',
    templateUrl: './hub-detail.component.html',
    styleUrls: ['./hub-detail.component.scss']
})
export class HubDetailComponent implements OnInit {
    selectedHub: HubDetailModel;
    private route = inject(ActivatedRoute);

    constructor() {
    }

    ngOnInit() {
        this.selectedHub = this.route.snapshot.data[0].data;
    }

}

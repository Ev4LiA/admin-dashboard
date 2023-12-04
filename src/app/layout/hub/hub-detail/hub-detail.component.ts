import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hub-detail',
  templateUrl: './hub-detail.component.html',
  styleUrls: ['./hub-detail.component.scss']
})
export class HubDetailComponent implements OnInit{
    selectedHub: any;
    private route = inject(ActivatedRoute);

    constructor() {
    }

    ngOnInit() {
        this.selectedHub = this.route.snapshot.data[0].data;
    }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-bar',
  templateUrl: './base-bar.component.html',
  styleUrls: ['./base-bar.component.scss']
})
export class BaseBarComponent implements OnInit{
    @Input() top: number;
    @Input() sticky: boolean;

    constructor() {
        this.sticky = false;
        this.top = null;
    }

    ngOnInit(): void {
        if (this.sticky && !this.top) {
            this.top = 44;
        }
    }
}

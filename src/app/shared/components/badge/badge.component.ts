import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
    @Input() title: string;
    @Input() type:string = 'success';
    @Input() badgeTitle: string;
    @Input() progress: boolean;
}

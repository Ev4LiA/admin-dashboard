import {Component, Input, OnInit} from '@angular/core';
import {ColumnType} from './vngcls-column-info-type';

@Component({
  selector: 'vngcls-column-info',
  templateUrl: './vngcls-column-info.component.html',
  styleUrls: ['./vngcls-column-info.component.scss']
})
export class VngclsColumnInfo implements OnInit {
  @Input() type: ColumnType = 'row';

  constructor() {
  }

  ngOnInit(): void {
  }

}

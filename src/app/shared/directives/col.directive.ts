import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[vnCol]'
})
export class ColDirective implements OnInit {

  @Input('vnCol') colWidth: number | string;
  @Input() pxCol: number | string;
  @Input() col: string;
  @Input() hugContent = false;
  @Input() fillContainer = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.colWidth) {
      this.setColPercent(this.colWidth);
    }
    if (this.pxCol) {
      this.setColPx(this.pxCol);
    }
    if (this.hugContent || this.fillContainer) {
      this.el.nativeElement.style.flex = '1';
    }

    if (this.col) {
      this.handleColInput();
    }
  }

  setColPercent(col): void {
    this.el.nativeElement.style.width = col + '%';
  }

  setColPx(col): void {
    this.el.nativeElement.style.width = col + 'px';
  }

  setColTwelfth(col): void {
    this.el.nativeElement.style.width = (100 / 12 * parseInt(col, 10)) + '%';
  }

  handleColInput(): void {
    if (this.col.indexOf('%') > -1) {
      this.setColPercent(this.col.replace('%', ''));
    } else if (this.col.indexOf('px') > -1) {
      this.setColPx(this.col.replace('px', ''));
    } else if (/^\d+$/.test(this.col)) {
      this.setColTwelfth(this.col);
    }
  }
}

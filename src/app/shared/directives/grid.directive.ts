import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[vnGrid]'
})
export class GridDirective implements OnInit {

  @Input() fullWidth = true;
  @Input() alignItems: AlignItemsType;
  @Input() justifyContent: JustifyContentType;
  @Input() gap: number | string;
  @Input() marginT: number | string;
  @Input() marginB: number | string;
  @Input() marginL: number | string;
  @Input() marginR: number | string;

  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('vngcls-grid');
  }

  ngOnInit(): void {
    if (this.fullWidth) {
      this.el.nativeElement.style.width = '100%';
    }
    if (this.alignItems) {
      this.el.nativeElement.style.alignItems = this.alignItems;
    }
    if (this.justifyContent) {
      this.el.nativeElement.style.justifyContent = this.justifyContent;
    }
    if (this.gap) {
      this.el.nativeElement.style.gridGap = this.gap + 'px';
    }
    if (this.marginT) {
      this.el.nativeElement.style.marginTop = this.marginT + 'px';
    }
    if (this.marginB) {
      this.el.nativeElement.style.marginBottom = this.marginB + 'px';
    }
    if (this.marginL) {
      this.el.nativeElement.style.marginLeft = this.marginL + 'px';
    }
    if (this.marginR) {
      this.el.nativeElement.style.marginRight = this.marginR + 'px';
    }
  }
}

export type AlignItemsType = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
export type JustifyContentType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';

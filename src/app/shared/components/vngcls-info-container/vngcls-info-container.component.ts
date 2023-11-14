import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {InfoContainerTemplateDirective} from './info-container-template.directive';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';

const DEFAULT_DURATION = 200;

@Component({
  selector: 'vngcls-info-container',
  templateUrl: './vngcls-info-container.component.html',
  styleUrls: ['./vngcls-info-container.component.scss'],
  animations: [
    trigger('collapse', [
      state('true', style({height: AUTO_STYLE, visibility: AUTO_STYLE})),
      state('false', style({height: '0', paddingTop: '0', paddingBottom: '0', visibility: 'hidden'})),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class VngclsInfoContainer implements OnInit {

  @Input() marginBottom: number;
  @Input() content: string;
  @Input() collapsible: boolean;

  @Input() title: string;
  @Input() description: string;

  @Input() titleTemplate: TemplateRef<any>;
  @Input() descriptionTemplate: TemplateRef<any>;
  @Input() rightSideTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;

  containerContentShowing = true;

  @ContentChild(InfoContainerTemplateDirective, {read: InfoContainerTemplateDirective}) infoContainerTemplate
    : InfoContainerTemplateDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleContainer(): void {
    this.containerContentShowing = !this.containerContentShowing;
  }
}

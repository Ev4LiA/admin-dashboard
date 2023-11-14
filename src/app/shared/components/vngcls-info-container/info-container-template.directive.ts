import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[infoContainerTemplate]'
})
export class InfoContainerTemplateDirective {

  constructor(public tpl: TemplateRef<any>) {
  }

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BaseBarComponent } from './components/base-bar/base-bar.component';
import { BbMainBarComponent } from './components/bb-main-bar/bb-main-bar.component';
import {ColDirective} from "./directives/col.directive";
import {GridDirective} from "./directives/grid.directive";
import {VngclsColumnInfo} from "./components/vngcls-column-info/vngcls-column-info.component";
import {InfoContainerTemplateDirective} from "./components/vngcls-info-container/info-container-template.directive";
import {VngclsInfoContainer} from "./components/vngcls-info-container/vngcls-info-container.component";

@NgModule({
    declarations: [
        ImageModalComponent,
        BadgeComponent,
        BaseBarComponent,
        BbMainBarComponent,
        VngclsColumnInfo,
        VngclsInfoContainer,
        ColDirective,
        GridDirective,
        InfoContainerTemplateDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BadgeComponent,
        BaseBarComponent,
        BbMainBarComponent,
        VngclsColumnInfo,
        VngclsInfoContainer,
        ColDirective,
        GridDirective,
        InfoContainerTemplateDirective
    ],
    providers: []
})
export class SharedModule { }

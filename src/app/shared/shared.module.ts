import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
    declarations: [
        ImageModalComponent,
        BadgeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BadgeComponent
    ],
    providers: []
})
export class SharedModule { }

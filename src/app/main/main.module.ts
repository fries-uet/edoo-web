import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main.routing";
import { ListClassesComponent } from './list-classes/list-classes.component';
import { ClassItemComponent } from './list-classes/class-item/class-item.component';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    declarations: [ListClassesComponent, ClassItemComponent]
})
export class MainModule {
}

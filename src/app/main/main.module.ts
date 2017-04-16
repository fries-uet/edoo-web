import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main.routing";
import { ListClassesComponent } from './list-classes/list-classes.component';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    declarations: [ListClassesComponent]
})
export class MainModule {
}

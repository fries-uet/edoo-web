import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main.routing";
import {ListClassesComponent} from './list-classes/list-classes.component';
import {ClassItemComponent} from './list-classes/class-item/class-item.component';
import {ClassDetailComponent} from './class-detail/class-detail.component';
import {ClassDetailResolverService} from "./class-detail/class-detail-resolver.service";
import {ClassService} from "../services/class.service";

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    declarations: [
        ListClassesComponent,
        ClassItemComponent,
        ClassDetailComponent
    ],
    providers: [
        ClassService,
        ClassDetailResolverService
    ]
})
export class MainModule {
}

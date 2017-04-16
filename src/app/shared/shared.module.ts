import {NgModule} from "@angular/core";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {UserDropdownComponent} from './user-dropdown/user-dropdown.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CommonModule} from "@angular/common";
import { ClassesDropdownComponent } from './classes-dropdown/classes-dropdown.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BsDropdownModule.forRoot(),
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        UserDropdownComponent,
        ClassesDropdownComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        UserDropdownComponent
    ]
})
export class SharedModule {
}

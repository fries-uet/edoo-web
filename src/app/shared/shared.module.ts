import {NgModule} from "@angular/core";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {UserDropdownComponent} from './user-dropdown/user-dropdown.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CommonModule} from "@angular/common";
import {ClassesDropdownComponent} from './classes-dropdown/classes-dropdown.component';
import {ControlEditableComponent} from './control-editable/control-editable.component';
import {FormsModule} from "@angular/forms";
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {UserAvatarComponent} from './user-avatar/user-avatar.component';
import {LayoutMasterComponent} from "../layout-master/layout-master.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        BsDropdownModule.forRoot(),
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        UserDropdownComponent,
        ClassesDropdownComponent,
        ControlEditableComponent,
        BreadcrumbsComponent,
        UserAvatarComponent,
        LayoutMasterComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        UserDropdownComponent,
        ClassesDropdownComponent,
        ControlEditableComponent,
        BreadcrumbsComponent,
        UserAvatarComponent,
        LayoutMasterComponent
    ]
})
export class SharedModule {
}

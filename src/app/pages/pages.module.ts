import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesLayoutMasterComponent} from './pages-layout-master/pages-layout-master.component';
import {LoginComponent} from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import {PagesRoutingModule} from "./pages.routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class PagesModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesLayoutMasterComponent} from './pages-layout-master/pages-layout-master.component';
import {LoginComponent} from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import {PagesRoutingModule} from "./pages.routing";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class PagesModule {
}

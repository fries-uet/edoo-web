import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "../shared/shared.module";
import {PagesRoutingModule} from "./pages.routing";
import {FormsModule} from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
import { Page404Component } from './page-404/page-404.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        FormsModule
    ],
    declarations: [
        LoginComponent,
        WelcomeComponent,
        Page404Component
    ]
})
export class PagesModule {
}

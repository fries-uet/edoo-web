import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {SharedModule} from "./shared/shared.module";
import {StorageService} from "./services/storage.service";
import {ApiService} from "./services/api.service";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {EventService} from "./services/event.service";
import {NgProgressModule} from "ng2-progressbar";
import {BreadcrumbsService} from "./services/breadcrumbs.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        AppRoutingModule,
        NgProgressModule
    ],
    providers: [
        EventService,
        StorageService,
        ApiService,
        AuthService,
        AuthGuardService,
        BreadcrumbsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}

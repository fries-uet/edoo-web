import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing";
import {PagesLayoutMasterComponent} from "./pages/pages-layout-master/pages-layout-master.component";
import {SharedModule} from "./shared/shared.module";
import {StorageService} from "./services/storage.service";
import {ApiService} from "./services/api.service";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {EventService} from "./services/event.service";

@NgModule({
    declarations: [
        AppComponent,
        PagesLayoutMasterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        AppRoutingModule,
    ],
    providers: [
        EventService,
        StorageService,
        ApiService,
        AuthService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

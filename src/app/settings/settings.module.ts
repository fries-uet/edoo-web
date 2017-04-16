import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsRoutingModule} from "./settings.routing";
import {SidebarUserSettingsComponent} from './sidebar-user-settings/sidebar-user-settings.component';
import {SettingsLayoutMasterComponent} from './settings-layout-master/settings-layout-master.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ProfileResolverService} from "./edit-profile/profile-resolver.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SettingsRoutingModule,
        FormsModule
    ],
    declarations: [
        SettingsLayoutMasterComponent,
        SidebarUserSettingsComponent,
        EditProfileComponent,
        ChangePasswordComponent
    ],
    providers: [
        UserService,
        ProfileResolverService
    ]
})
export class SettingsModule {
}

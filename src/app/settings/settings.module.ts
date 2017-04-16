import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsRoutingModule} from "./settings.routing";
import {SidebarUserSettingsComponent} from './sidebar-user-settings/sidebar-user-settings.component';
import {SettingsLayoutMasterComponent} from './settings-layout-master/settings-layout-master.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule
    ],
    declarations: [
        SettingsLayoutMasterComponent,
        SidebarUserSettingsComponent,
        EditProfileComponent,
        ChangePasswordComponent
    ]
})
export class SettingsModule {
}

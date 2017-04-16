import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SettingsLayoutMasterComponent} from "./settings-layout-master/settings-layout-master.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ProfileResolverService} from "./edit-profile/profile-resolver.service";


export const routes: Routes = [
    {
        path: '',
        component: SettingsLayoutMasterComponent,
        children: [
            {
                path: '',
                redirectTo: 'profile',

            },
            {
                path: 'profile',
                component: EditProfileComponent,
                resolve: {
                    user: ProfileResolverService
                }
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {
}
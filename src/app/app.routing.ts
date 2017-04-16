import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./services/auth-guard.service";
import {LayoutMasterComponent} from "./layout-master/layout-master.component";

export const routes: Routes = [
    {
        path: 'a',
        component: LayoutMasterComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/main/main.module#MainModule',
                canLoad: [AuthGuardService]
            }
        ]
    },
    {
        path: 'settings',
        component: LayoutMasterComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/settings/settings.module#SettingsModule',
                canLoad: [AuthGuardService]
            }
        ]
    },
    {
        path: '',
        component: LayoutMasterComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/pages/pages.module#PagesModule',
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
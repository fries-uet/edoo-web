import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: 'a',
        loadChildren: 'app/main/main.module#MainModule',
    },
    {
        path: 'settings',
        loadChildren: 'app/settings/settings.module#SettingsModule',
    },
    {
        path: '',
        loadChildren: 'app/pages/pages.module#PagesModule',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
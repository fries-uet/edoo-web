import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PagesLayoutMasterComponent} from "./master/pages-layout-master/pages-layout-master.component";
import {MainLayoutMasterComponent} from "./master/main-layout-master/main-layout-master.component";

export const routes: Routes = [
    {
        path: 'a',
        component: MainLayoutMasterComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/main/main.module#MainModule'
            }
        ]
    },
    {
        path: '',
        component: PagesLayoutMasterComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/pages/pages.module#PagesModule'
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
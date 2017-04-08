import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PagesLayoutMasterComponent} from "./pages/pages-layout-master/pages-layout-master.component";

export const routes: Routes = [
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
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {Page404Component} from "./page-404/page-404.component";
import {SupportComponent} from "./support/support.component";

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'support',
        component: SupportComponent
    },
    {
        path: '**',
        component: Page404Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
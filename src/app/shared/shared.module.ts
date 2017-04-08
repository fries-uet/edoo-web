import {NgModule} from "@angular/core";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent
    ]
})
export class SharedModule {
}

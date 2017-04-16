import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ListClassesComponent} from "./list-classes/list-classes.component";


export const routes: Routes = [
    {
        path: '',
        component: ListClassesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
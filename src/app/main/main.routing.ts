import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ListClassesComponent} from "./list-classes/list-classes.component";
import {ClassDetailComponent} from "./class-detail/class-detail.component";


export const routes: Routes = [
    {
        path: '',
        component: ListClassesComponent
    },
    {
        path: ':id',
        component: ClassDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
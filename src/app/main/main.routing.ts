import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ListClassesComponent} from "./list-classes/list-classes.component";
import {ClassDetailComponent} from "./class-detail/class-detail.component";
import {ClassDetailResolverService} from "./class-detail/class-detail-resolver.service";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostDetailResolverService} from "./post-detail/post-detail-resolver.service";


export const routes: Routes = [
    {
        path: '',
        component: ListClassesComponent
    },
    {
        path: ':id',
        component: ClassDetailComponent,
        resolve: {
            data: ClassDetailResolverService
        }
    },
    {
        path: 'post/:id',
        component: PostDetailComponent,
        resolve: {
            data: PostDetailResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
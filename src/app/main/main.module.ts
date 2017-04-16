import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main.routing";
import {ListClassesComponent} from './list-classes/list-classes.component';
import {ClassItemComponent} from './list-classes/class-item/class-item.component';
import {ClassDetailComponent} from './class-detail/class-detail.component';
import {ClassDetailResolverService} from "./class-detail/class-detail-resolver.service";
import {ClassService} from "../services/class.service";
import {ListPostsComponent} from './list-posts/list-posts.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostDetailResolverService} from "./post-detail/post-detail-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    declarations: [
        ListClassesComponent,
        ClassItemComponent,
        ClassDetailComponent,
        ListPostsComponent,
        PostDetailComponent
    ],
    providers: [
        ClassService,
        ClassDetailResolverService,
        PostDetailResolverService
    ]
})
export class MainModule {
}

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
import {SharedModule} from "../shared/shared.module";
import { ClassMetadataComponent } from './class-metadata/class-metadata.component';
import { PostItemComponent } from './list-posts/post-item/post-item.component';
import { PostMetadataComponent } from './post-metadata/post-metadata.component';
import { SidebarListClassesComponent } from './sidebar-list-classes/sidebar-list-classes.component';
import { SidebarTopUsersComponent } from './sidebar-top-users/sidebar-top-users.component';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule
    ],
    declarations: [
        ListClassesComponent,
        ClassItemComponent,
        ClassDetailComponent,
        ListPostsComponent,
        PostDetailComponent,
        ClassMetadataComponent,
        PostItemComponent,
        PostMetadataComponent,
        SidebarListClassesComponent,
        SidebarTopUsersComponent
    ],
    providers: [
        ClassService,
        ClassDetailResolverService,
        PostDetailResolverService
    ]
})
export class MainModule {
}

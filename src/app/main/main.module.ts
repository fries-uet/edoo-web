import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainRoutingModule} from "./main.routing";
import {ListClassesComponent} from "./list-classes/list-classes.component";
import {ClassItemComponent} from "./list-classes/class-item/class-item.component";
import {ClassDetailComponent} from "./class-detail/class-detail.component";
import {ClassDetailResolverService} from "./class-detail/class-detail-resolver.service";
import {ClassService} from "../services/class.service";
import {ListPostsComponent} from "./list-posts/list-posts.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostDetailResolverService} from "./post-detail/post-detail-resolver.service";
import {SharedModule} from "../shared/shared.module";
import {ClassMetadataComponent} from "./class-metadata/class-metadata.component";
import {PostItemComponent} from "./list-posts/post-item/post-item.component";
import {PostMetadataComponent} from "./post-metadata/post-metadata.component";
import {SidebarListClassesComponent} from "./sidebar-list-classes/sidebar-list-classes.component";
import {SidebarTopUsersComponent} from "./sidebar-top-users/sidebar-top-users.component";
import {CommentComponent} from "./comment/comment.component";
import {VotePostComponent} from "./post-detail/vote-post/vote-post.component";
import {VoteCommentComponent} from "./comment/vote-comment/vote-comment.component";
import {PostService} from "../services/post.service";
import {CreateCommentComponent} from "./create-comment/create-comment.component";
import {CommentService} from "../services/comment.service";

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
        SidebarTopUsersComponent,
        CommentComponent,
        VotePostComponent,
        VoteCommentComponent,
        CreateCommentComponent
    ],
    providers: [
        ClassService,
        PostService,
        CommentService,
        ClassDetailResolverService,
        PostDetailResolverService,
    ]
})
export class MainModule {
}

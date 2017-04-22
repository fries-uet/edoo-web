import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {BreadcrumbsService} from "../../services/breadcrumbs.service";
import {EdPostDetail} from "../../definitions/ed-post-detail";
import {PostService} from "../../services/post.service";

@Component({
    selector: 'ed-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    public post: EdPostDetail;

    constructor(private route: ActivatedRoute,
                private breadcrumbsSrv: BreadcrumbsService,
                private postSrv: PostService,
                private title: Title) {
    }

    onVote(value: number) {
        this.postSrv.votePost(this.post.id, value)
            .subscribe(
                () => {
                    this.fetchPost();
                }
            );
    }

    fetchPost() {
        this.postSrv.getPost(this.post.id)
            .subscribe(
                response => {
                    this.post = response.data;
                }
            );
    }

    ngOnInit() {
        this.route.data
            .subscribe(
                (response: { data: EdPostDetail }) => {
                    this.onFetchData(response.data);
                }
            );
    }

    onFetchData(data) {
        this.post = data;
        this.title.setTitle(this.post.title);

        this.breadcrumbsSrv.setData([
            {
                link: '/a',
                text: 'Trang chủ',
            },
            {
                link: '/a/' + this.post.class.id,
                text: this.post.class.name,
            },
            {
                text: this.post.title
            }
        ]);
    }

}

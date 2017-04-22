import {Component, OnInit} from '@angular/core';
import {EdPost} from "../../definitions/ed-post";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {BreadcrumbsService} from "../../services/breadcrumbs.service";

@Component({
    selector: 'ed-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    public post: EdPost;

    constructor(private route: ActivatedRoute,
                private breadcrumbsSrv: BreadcrumbsService,
                private title: Title) {
    }

    ngOnInit() {
        this.route.data
            .subscribe(
                (response: { data: EdPost }) => {
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
                text: 'sss'
            }
        ]);
    }

}

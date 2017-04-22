import {Component, OnInit} from '@angular/core';
import {EdPost} from "../../definitions/ed-post";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {BreadcrumbsService} from "../../services/breadcrumbs.service";
import {EdPostDetail} from "../../definitions/ed-post-detail";

@Component({
    selector: 'ed-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    public post: EdPostDetail;

    constructor(private route: ActivatedRoute,
                private breadcrumbsSrv: BreadcrumbsService,
                private title: Title) {
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

import {Component, OnInit} from '@angular/core';
import {EdPost} from "../../definitions/ed-post";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'ed-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    public post: EdPost;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data
            .subscribe(
                (response: { data: EdPost }) => {
                    this.post = response.data;
                }
            );
    }

}

import {Component, Input, OnInit} from '@angular/core';
import {EdPost} from "../../definitions/ed-post";

@Component({
    selector: 'ed-list-posts',
    templateUrl: './list-posts.component.html',
    styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
    @Input() public posts: Array<EdPost> = [];

    constructor() {
    }

    ngOnInit() {
    }

}

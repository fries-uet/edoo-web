import {Component, Input, OnInit} from '@angular/core';
import {EdPost} from "../../../definitions/ed-post";

@Component({
    selector: 'ed-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
    @Input() public post: EdPost = null;

    constructor() {
    }

    ngOnInit() {
    }

}

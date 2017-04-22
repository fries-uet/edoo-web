import {Component, Input, OnInit} from '@angular/core';
import {EdPost} from "../../definitions/ed-post";

@Component({
    selector: 'ed-post-metadata',
    templateUrl: './post-metadata.component.html',
    styleUrls: ['./post-metadata.component.scss']
})
export class PostMetadataComponent implements OnInit {
    @Input() public post: EdPost = null;

    constructor() {
    }

    ngOnInit() {
    }

}

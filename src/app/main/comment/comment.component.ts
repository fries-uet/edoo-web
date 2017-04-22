import {Component, Input, OnInit} from '@angular/core';
import {EdComment} from "../../definitions/ed-comment";

@Component({
    selector: 'ed-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
    @Input() public comment: EdComment;

    constructor() {
    }

    ngOnInit() {
    }

}

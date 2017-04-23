import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EdComment} from "../../definitions/ed-comment";
import {CommentService} from "../../services/comment.service";

@Component({
    selector: 'ed-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
    @Input() public comment: EdComment;
    @Output() public update: EventEmitter<any> = new EventEmitter();

    constructor(private commentSrv: CommentService) {
    }

    ngOnInit() {
    }

    onVote(value) {
        let comment_id = this.comment.id;

        if (value == 1) {
            this.commentSrv.up(comment_id)
                .subscribe(
                    response => {
                        this.update.next();
                    }
                );
        } else if (value == -1) {
            this.commentSrv.down(comment_id)
                .subscribe(
                    response => {
                        this.update.next();
                    }
                );
        }
    }

}

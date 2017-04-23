import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EdVote} from "../../../definitions/ed-vote";
import {StorageService} from "../../../services/storage.service";
import {EdUser} from "../../../definitions/ed-user";

@Component({
    selector: 'ed-vote-comment',
    templateUrl: './vote-comment.component.html',
    styleUrls: ['./vote-comment.component.scss']
})
export class VoteCommentComponent implements OnInit, DoCheck {
    @Input() public votes: Array<EdVote> = [];
    @Input() public author: EdUser;
    @Output() public vote: EventEmitter<any> = new EventEmitter();

    public result: number = 0;
    public can_vote: boolean = false;
    public currentUser: EdUser;
    public action: number;

    constructor(private storageSrv: StorageService) {
    }

    ngDoCheck() {
        this.can_vote = this.currentUser.id != this.author.id;
        this.calculateResult();
    }

    ngOnInit() {
        this.currentUser = this.storageSrv.getCurrentUser();
    }

    calculateResult() {
        let count = 0;

        this.votes.forEach((vote: EdVote) => {
            if (this.currentUser.id == vote.author.id) {
                this.action = vote.up;
            }

            if (vote.up) {
                count++;
            } else {
                count--;
            }
        });

        this.result = count;
    }

    onClickVote(value: number) {
        if (!this.can_vote || this.action == value) {
            return;
        }

        this.vote.next(value);
    }
}

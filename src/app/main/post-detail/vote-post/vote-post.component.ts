import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {EdVote} from "../../../definitions/ed-vote";
import {StorageService} from "../../../services/storage.service";
import {EdUser} from "../../../definitions/ed-user";

@Component({
    selector: 'ed-vote-post',
    templateUrl: './vote-post.component.html',
    styleUrls: ['./vote-post.component.scss']
})
export class VotePostComponent implements OnInit, DoCheck {
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
        if (!this.can_vote) {
            return;
        }


        if (this.action == value) {
            return;
        }

        if (this.action == 0 && value == -1) {
            return;
        }

        this.vote.next(value);
    }
}

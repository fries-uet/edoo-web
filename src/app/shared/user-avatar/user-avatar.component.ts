import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ed-user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
    @Input() public src: string;

    constructor() {
    }

    ngOnInit() {
    }

}

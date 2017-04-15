import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {EventService} from "../../services/event.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'ed-user-dropdown',
    templateUrl: './user-dropdown.component.html',
    styleUrls: ['./user-dropdown.component.scss'],
    providers: [UserService]
})
export class UserDropdownComponent implements OnInit {
    private isOpen: boolean = false;
    private user: any = {};

    constructor(private authSrv: AuthService,
                private eventSrv: EventService,
                private userSrv: UserService) {
    }

    ngOnInit() {
    }

    private updateStatus() {
        this.isOpen = this.authSrv.isLoggedIn();
    }

    public onClickLogout($event: Event) {
        $event.preventDefault();

        this.userSrv.logout();
        this.eventSrv.emit('logout_success');
    }

}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {EventService} from "../../services/event.service";
import {UserService} from "../../services/user.service";
import {StorageService} from "../../services/storage.service";
import {EdUser} from "../../definitions/ed-user";

@Component({
    selector: 'ed-user-dropdown',
    templateUrl: './user-dropdown.component.html',
    styleUrls: ['./user-dropdown.component.scss'],
    providers: [UserService]
})
export class UserDropdownComponent implements OnInit {
    public isOpen: boolean = false;
    public user: EdUser = null;

    constructor(private authSrv: AuthService,
                private storageSrv: StorageService,
                private eventSrv: EventService,
                private userSrv: UserService) {
    }

    ngOnInit() {
        if (this.authSrv.isLoggedIn()) {
            this.onUpdateData();
        }

        this.eventSrv.on('update_data')
            .subscribe(
                () => {
                    this.onUpdateData();
                }
            );
    }

    private onUpdateData() {
        this.isOpen = this.authSrv.isLoggedIn();
        this.user = this.storageSrv.getCurrentUser();
    }

    public onClickLogout($event: Event) {
        $event.preventDefault();

        this.userSrv.logout();
        this.eventSrv.emit('logout_success');
    }

}

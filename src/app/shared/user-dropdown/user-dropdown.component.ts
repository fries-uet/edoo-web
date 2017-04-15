import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {EventService} from "../../services/event.service";

@Component({
    selector: 'ed-user-dropdown',
    templateUrl: './user-dropdown.component.html',
    styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
    private isOpen: boolean = false;

    constructor(private authSrv: AuthService) {
    }

    private updateStatus() {
        this.isOpen = this.authSrv.isLoggedIn();
    }

    ngOnInit() {
        this.updateStatus();
    }

}

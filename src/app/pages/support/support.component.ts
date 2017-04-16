import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'ed-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
    providers: [UserService]
})
export class SupportComponent implements OnInit {
    public email = '';
    public type = '1';
    public content = '';
    public isDisabled = false;

    constructor(private userSrv: UserService,
                private storageSrv: StorageService,
                private authSrv: AuthService) {
    }

    ngOnInit() {
        if (this.authSrv.isLoggedIn()) {
            let user = this.storageSrv.getCurrentUser();
            this.email = user['email'];
        }
    }

    onSubmit() {
        this.isDisabled = true;
        this.userSrv.sendSupportRequest(this.email, this.type, this.content).subscribe(
            res => {
                this.type = '';
                this.content = '';

                this.isDisabled = false;
            },
            err => {
                this.isDisabled = false;
            }
        )
    }

}

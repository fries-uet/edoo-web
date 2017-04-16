import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {StorageService} from "../../services/storage.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'ed-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    public old_pass: string = '';
    public new_pass: string = '';
    public confirm_pass: string = '';
    public isDisabled = false;

    constructor(private userSrv: UserService,
                private storageSrv: StorageService,
                private titleSrv: Title) {
    }

    ngOnInit() {
        this.titleSrv.setTitle('Thay đổi mật khẩu');
    }

    public submit() {
        let valid = this.validate();

        if (!valid) {
            return;
        }

        this.update();
    }

    public update() {
        this.isDisabled = true;

        this.userSrv
            .changePassword(this.old_pass, this.new_pass)
            .subscribe(
                data => {
                    let token = data.token;
                    this.storageSrv.setToken(token);
                    this.reset_all();

                    this.isDisabled = false;
                },
                error => {
                    this.isDisabled = false;

                    this.reset_all();
                }
            )
    }

    public validate() {
        if (this.new_pass !== this.confirm_pass) {
            this.new_pass = '';
            this.confirm_pass = '';

            return false;
        }

        return true;
    }

    public reset_all() {
        this.old_pass = '';
        this.new_pass = '';
        this.confirm_pass = '';
    }

}

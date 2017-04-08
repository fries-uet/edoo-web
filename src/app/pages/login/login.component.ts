import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {EventService} from "../../services/event.service";

@Component({
    selector: 'edoo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    public user: any = {
        email: '',
        password: ''
    };

    public isDisabled = false;

    constructor(private userSrv: UserService,
                private eventSrv: EventService) {
    }

    ngOnInit() {
    }

    submit() {
        this.isDisabled = true;

        this.userSrv.login(this.user.email, this.user.password)
            .subscribe(
                (response: any) => {
                    this.eventSrv.emit('login_success', response.data);
                },
                error => {
                    this.resetAll();
                },
                () => {
                    this.resetAll();
                }
            );
    }

    private resetAll() {
        this.user = {
            email: '',
            password: ''
        }
    }


}

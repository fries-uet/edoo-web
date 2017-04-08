import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'edoo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    private user: any = {
        email: '',
        password: ''
    };

    constructor(private userSrv: UserService) {
    }

    ngOnInit() {
    }

    submit() {
        console.log(this.user);

        this.userSrv.login(this.user.email, this.user.password)
            .subscribe(
                data => {
                    console.log(data);
                }
            );
    }

}

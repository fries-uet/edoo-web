import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'edoo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private user: any = {
        email: '',
        password: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

    submit() {

    }

}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ed-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

    constructor(private authSrv: AuthService,
                private route: Router) {
    }

    ngOnInit() {
        if (this.authSrv.isLoggedIn()) {
            this.route.navigate(['/a']);
        }
    }

}

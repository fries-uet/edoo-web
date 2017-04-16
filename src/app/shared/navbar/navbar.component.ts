import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {EdClass} from "../../definitions/ed-class";

@Component({
    selector: 'edoo-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(public authSrv: AuthService) {
    }

    ngOnInit() {
    }

}

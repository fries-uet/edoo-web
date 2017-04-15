import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {EventService} from "./event.service";

@Injectable()
export class AuthService {
    private isLoggedIn_ = false;

    constructor(private storageSrv: StorageService,
                private eventSrv: EventService,
                private router: Router) {
        this.eventSrv.on('invalid_token')
            .subscribe(
                () => {
                    this.updateStatus();
                    this.reLogin();
                }
            );

        this.eventSrv.on('login_success')
            .subscribe(
                data => {
                    this.onLoginSuccess(data);
                }
            );

        this.eventSrv.on('logout_success')
            .subscribe(
                () => {
                    this.storageSrv.resetAll();
                    this.updateStatus();
                }
            );

        this.updateStatus();
    }

    private updateStatus() {
        this.isLoggedIn_ = Boolean(this.storageSrv.get('token'));
    }

    private onLoginSuccess(data: any) {
        this.storageSrv.setCurrentUser(data.user);
        this.storageSrv.setToken(data.token);

        let redirectUrl = '/';
        if (this.storageSrv.get('returnUrl')) {
            redirectUrl = this.storageSrv.get('returnUrl');
        }

        this.redirectTo(redirectUrl);
        this.storageSrv.set('returnUrl', false);

        this.updateStatus();
    }

    private reLogin() {
        this.storageSrv.set('token', false);
        let returnUrl = this.router.url;
        this.storageSrv.set('returnUrl', returnUrl);
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        return this.isLoggedIn_;
    }

    private redirectTo(url: string) {
        console.log(`Navigate to ${url}`);

        this.router.navigate([url]);
    }

}

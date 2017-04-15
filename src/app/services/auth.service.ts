import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {EventService} from "./event.service";

@Injectable()
export class AuthService {
    public static isLoggedIn_ = false;

    public $invalidToken = new Subject<any>();
    public $login = new Subject<any>();

    public onInvalidToken = this.$invalidToken.asObservable();
    public onLogin = this.$login.asObservable();

    constructor(private storageSrv: StorageService,
                private eventSrv: EventService,
                private router: Router) {
        this.onInvalidToken
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

        this.updateStatus();
    }

    private updateStatus() {
        AuthService.isLoggedIn_ = Boolean(this.storageSrv.get('token'));
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
        return AuthService.isLoggedIn_;
    }

    private redirectTo(url: string) {
        console.log(`Navigate to ${url}`);

        this.router.navigate([url]);
    }

}

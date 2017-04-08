import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {EventService} from "./event.service";

@Injectable()
export class AuthService {
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
                    this.reLogin();
                }
            );

        this.eventSrv.on('login_success')
            .subscribe(
                data => {
                    this.onLoginSuccess(data);
                }
            );
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
    }

    reLogin() {
        this.storageSrv.set('token', false);
        let returnUrl = this.router.url;
        this.storageSrv.set('returnUrl', returnUrl);
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        return Boolean(this.storageSrv.getToken() || false);
    }

    private redirectTo(url: string) {
        console.log(`Navigate to ${url}`);

        this.router.navigate([url]);
    }

}

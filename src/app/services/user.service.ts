import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
    constructor(private api: ApiService) {
    }

    public register(email: string, password: string): Observable<any> {
        let args = {
            url: '/register',
            method: 'POST',
            data: {
                email,
                password
            }
        };

        return this.api.request(args);
    }

    public login(email: string, password: string): Observable<any> {
        let args = {
            url: '/login',
            method: 'POST',
            data: {
                email,
                password
            }
        };

        return this.api.request(args);
    }

    public forgotPassword(email: string): Observable<any> {
        let args = {
            url: '/forgot-password',
            method: 'POST',
            data: {
                email
            }
        };

        return this.api.request(args);
    }

    public resetPassword(token: string, password: string, verify: string): Observable<any> {
        let args = {
            url: `/reset-password`,
            method: 'POST',
            data: {
                token,
                password,
                verify,
            }
        };

        return this.api.request(args);
    }

    public logout(): Observable<any> {
        let args = {
            url: '/logout',
            method: 'GET',
        };

        return this.api.requestAuth(args);
    }

    public getProfile(): Observable<any> {
        let args = {
            url: '/profile',
            method: 'GET',
        };

        return this.api.requestAuth(args);
    }

    public updateProfile(data: any): Observable<any> {
        let args = {
            url: '/profile',
            method: 'POST',
            data
        };

        return this.api.requestAuth(args);
    }

    public changePassword(old_password: string, new_password: string): Observable<any> {
        let args = {
            url: '/changepass',
            method: 'POST',
            data: {
                old_password,
                new_password
            }
        };

        return this.api.requestAuth(args);
    }

    public sendSupportRequest(email: string, type: string, content: string) {
        let data = {
            type: type,
            content: content
        };

        if (email.length > 0) {
            data['email'] = email;
        }

        let args = {
            data: data,
            method: 'POST',
            url: '/sendsupport'
        };

        return this.api
            .request(args);
    }
}

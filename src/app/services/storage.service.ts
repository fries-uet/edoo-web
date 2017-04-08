import {Injectable} from '@angular/core';
import {EdUser} from "../definitions/ed-user";

@Injectable()
export class StorageService {
    private namespace = 'marketify_co';

    constructor() {
    }

    public set(key: string, value: any) {
        let k = this.namespace + ':' + key;

        localStorage.setItem(k, JSON.stringify(value));
    }

    public get(key: string, default_?: any) {
        let k = this.namespace + ':' + key;

        try {
            return JSON.parse(localStorage.getItem(k)) || default_;
        }
        catch (e) {
            return default_;
        }
    }

    setToken(token: any): void {
        this.set('token', token);
    }

    getToken(): any {
        return this.get('token');
    }

    getCurrentUser(): EdUser {
        return this.get('profile') || false;
    }

    setCurrentUser(user: EdUser): void {
        this.set('profile', user);
    }
}

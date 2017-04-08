import {Injectable} from '@angular/core';
import {EdUser} from "../definitions/ed-user";

@Injectable()
export class StorageService {
    private namespace = 'marketify_co';

    constructor() {
    }

    private getKeyStorage(key: string): string {
        return this.namespace + ':' + key;
    }

    public set(key: string, value: any): void {
        let k = this.getKeyStorage(key);

        localStorage.setItem(k, JSON.stringify(value));
    }

    public get(key: string, default_?: any): any {
        let k = this.getKeyStorage(key);

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
        return this.get('user') || false;
    }

    setCurrentUser(user: EdUser): void {
        this.set('user', user);
    }
}

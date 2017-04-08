import {Injectable} from '@angular/core';
import {EdUser} from "../definitions/ed-user";

@Injectable()
export class StorageService {
    private namespace = 'marketify_co';

    constructor() {
    }

    private setData(data): void {
        localStorage.setItem(this.namespace, JSON.stringify(data));
    }

    private getData(): any {
        try {
            return JSON.parse(localStorage.getItem(this.namespace)) || {};
        }
        catch (e) {
            return {};
        }
    }

    public set(key: string, value: any) {
        let data = this.getData();
        data[key] = value;

        this.setData(data);
    }

    public get(key: string, default_?: any) {
        let data = this.getData();

        return data[key] || default_;
    }

    setToken(token: any): void {
        this.set('token', token);
    }

    getToken(): any {
        return this.get('token');
    }

    deleteAll(): void {
        this.setData(false);
    }

    getCurrentUser(): EdUser {
        return this.get('profile') || false;
    }

    setCurrentUser(user: EdUser): void {
        this.set('profile', user);
    }

}

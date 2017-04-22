import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClassService {

    constructor(private apiSrv: ApiService) {
    }

    public getListClasses(): Observable<any> {
        let args = {
            method: 'GET',
            url: '/classes'
        };

        return this.apiSrv.requestAuth(args);
    }

    public getClassDetail(class_id: string, page: number = 1): Observable<any> {
        let args = {
            method: 'GET',
            url: '/posts/' + class_id + '/page/' + page
        };

        return this.apiSrv.requestAuth(args);
    }

    public getPosts(class_id: string, page: number = 1): Observable<any> {
        let args = {
            method: 'GET',
            url: '/posts/' + class_id + '/page/' + page
        };

        return this.apiSrv.requestAuth(args);
    }

    public getPost(post_id) {
        let args = {
            method: 'GET',
            url: '/post/' + post_id
        };

        return this.apiSrv.requestAuth(args);
    }

    public getTopUsers(class_id) {
        let args = {
            method: 'GET',
            url: '/classrank/' + class_id
        };

        return this.apiSrv.requestAuth(args);
    }

}

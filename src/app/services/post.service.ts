import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {

    constructor(private apiSrv: ApiService) {
    }

    public getPost(post_id): Observable<any> {
        let args = {
            method: 'GET',
            url: '/post/' + post_id
        };

        return this.apiSrv.requestAuth(args);
    }

    public votePost(post_id: any, content: number): Observable<any> {
        return this.apiSrv.requestAuth({
            method: 'POST',
            url: '/votepost',
            data: {
                post_id,
                content
            }
        });
    }
}

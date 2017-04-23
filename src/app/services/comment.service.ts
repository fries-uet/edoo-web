import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommentService {

    constructor(private apiSrv: ApiService) {
    }

    up(comment_id: number): Observable<any> {
        return this.apiSrv.requestAuth({
            url: '/votecmt',
            method: 'POST',
            data: {
                comment_id
            }
        });
    }

    down(comment_id: number): Observable<any> {
        return this.apiSrv.requestAuth({
            url: '/devotecmt',
            method: 'POST',
            data: {
                comment_id
            }
        });
    }
}

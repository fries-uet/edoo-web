import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {AuthService} from "./auth.service";
import {StorageService} from "./storage.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {

    private BASE_URL = '';

    constructor(private http: Http,
                private authSrv: AuthService,
                private storageSrv: StorageService) {
        this.BASE_URL = environment.api;
    }

    public requestAuth(args, silent: boolean = false) {
        let token = this.storageSrv.getToken();
        let access_token = token.access_token || false;
        let headers = args.headers || {};
        headers['Authorization'] = access_token;

        args.headers = headers;

        return this.request(args);
    }

    public request(args): Observable<any> {
        let url_api = this.BASE_URL + args.url;

        let headers = new Headers();
        headers.set('Content-Type', 'application/json');
        let args_headers = args.headers || {};
        for (let header_key in args_headers) {
            headers.set(header_key, args_headers[header_key]);
        }

        let request = this.http
            .request(url_api, {
                method: args.method,
                headers: headers,
                body: args.data
            })
            .map(
                (response: Response) => {
                    return response.json();
                }
            )
            .share();

        this.subscribeInvalidToken(request);

        return request;
    }

    private subscribeInvalidToken(request: Observable<any>) {
        request
            .subscribe(
                () => {
                },
                error => {
                    if (error.status && error.status == 401) {
                        this.authSrv.$invalidToken.next();
                    }
                }
            );
    }
}

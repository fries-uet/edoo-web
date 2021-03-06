import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {StorageService} from "./storage.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {NgProgressService} from "ng2-progressbar";
import {EventService} from "./event.service";

@Injectable()
export class ApiService {

    private BASE_URL = '';

    constructor(private http: Http,
                private eventSrv: EventService,
                private progressService: NgProgressService,
                private storageSrv: StorageService) {
        this.BASE_URL = environment.api;
    }

    public requestAuth(args, silent: boolean = false): Observable<any> {
        let token = this.storageSrv.getToken();
        let headers = args.headers || {};
        headers['Authorization'] = token;

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

        this.subscribeToRunProgressBar(request);
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
                        this.eventSrv.emit('invalid_token');
                    }
                }
            );
    }

    private subscribeToRunProgressBar(request: Observable<any>) {
        this.progressService.start();

        request
            .subscribe(
                () => {
                    this.progressService.done();
                },
                () => {
                    this.progressService.done();
                }
            );
    }
}

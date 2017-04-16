import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {EdUser} from "../../definitions/ed-user";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../services/user.service";

@Injectable()
export class ProfileResolverService implements Resolve<EdUser> {

    constructor(private userSrv: UserService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EdUser> {
        return this.userSrv.getProfile()
            .map(
                response => {
                    return response.data;
                }
            );
    }

}

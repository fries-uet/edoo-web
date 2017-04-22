import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {EdPost} from "../../definitions/ed-post";
import {Observable} from "rxjs/Observable";
import {ClassService} from "../../services/class.service";

@Injectable()
export class PostDetailResolverService implements Resolve<EdPost> {

    constructor(private classSrv: ClassService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EdPost> {
        let id = route.params['id'];

        return this.classSrv.getPost(id)
            .map(
                (response) => {
                    return response.data;
                }
            );
    }

}

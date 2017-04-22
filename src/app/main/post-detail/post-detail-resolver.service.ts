import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {EdPost} from "../../definitions/ed-post";
import {Observable} from "rxjs/Observable";
import {PostService} from "../../services/post.service";

@Injectable()
export class PostDetailResolverService implements Resolve<EdPost> {

    constructor(private postSrv: PostService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EdPost> {
        let id = route.params['id'];

        return this.postSrv.getPost(id)
            .map(
                (response) => {
                    return response.data;
                }
            );
    }

}

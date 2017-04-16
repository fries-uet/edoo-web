import {Injectable} from "@angular/core";
import {ClassService} from "../../services/class.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {EdClassDetail} from "../../definitions/ed-class-detail";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClassDetailResolverService implements Resolve<EdClassDetail> {

    constructor(private classSrv: ClassService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EdClassDetail> {
        let id = route.params['id'];

        return this.classSrv.getClassDetail(id)
            .map(
                (response) => {
                    return response.data;
                }
            );
    }
}

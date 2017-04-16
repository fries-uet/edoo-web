import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params} from "@angular/router";
import {ClassService} from "../../services/class.service";
import {EdClassDetail} from "../../definitions/ed-class-detail";

@Component({
    selector: 'ed-class-detail',
    templateUrl: './class-detail.component.html',
    styleUrls: ['./class-detail.component.scss'],
    providers: [ClassService]
})
export class ClassDetailComponent implements OnInit {
    public class_: EdClassDetail = null;

    constructor(private route: ActivatedRoute,
                private classSrv: ClassService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.classSrv.getPosts(params['id']))
            .subscribe((response) => {
                this.class_ = response['data'];
            });
    }

}

import {Component, OnInit} from "@angular/core";

import "rxjs/add/operator/switchMap";
import {ActivatedRoute} from "@angular/router";
import {EdClassDetail} from "../../definitions/ed-class-detail";

@Component({
    selector: 'ed-class-detail',
    templateUrl: './class-detail.component.html',
    styleUrls: ['./class-detail.component.scss'],
})
export class ClassDetailComponent implements OnInit {
    public class_: EdClassDetail = null;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data
            .subscribe(
                (response: { data: EdClassDetail }) => {
                    this.class_ = response.data;

                    console.log('class_detail');
                }
            );
    }

}

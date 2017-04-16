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
                (data: { 0: EdClassDetail }) => {
                    this.class_ = data[0];

                    console.log('class_detail');
                }
            );
    }

}

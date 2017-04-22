import {Component, OnInit} from "@angular/core";

import "rxjs/add/operator/switchMap";
import {ActivatedRoute} from "@angular/router";
import {EdClassDetail} from "../../definitions/ed-class-detail";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'ed-class-detail',
    templateUrl: './class-detail.component.html',
    styleUrls: ['./class-detail.component.scss'],
})
export class ClassDetailComponent implements OnInit {
    public class_: EdClassDetail = null;

    constructor(private route: ActivatedRoute,
                private title: Title) {
    }

    ngOnInit() {
        this.route.data
            .subscribe(
                (response: { data: EdClassDetail }) => {
                    this.onFetchData(response.data);
                }
            );
    }

    onFetchData(data) {
        this.class_ = data;
        this.title.setTitle(this.class_.name);
    }

}

import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from "../../services/breadcrumbs.service";
import {EventService} from "../../services/event.service";

@Component({
    selector: 'ed-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
    public data: Array<any> = [];

    constructor(private eventSrv: EventService) {
    }

    ngOnInit() {
        this.eventSrv.on('update_breadcrumbs')
            .subscribe(
                (data) => {
                    this.data = data;
                }
            )
    }

}

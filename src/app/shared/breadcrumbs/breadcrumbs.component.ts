import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbsService} from "../../services/breadcrumbs.service";
import {EventService} from "../../services/event.service";

@Component({
    selector: 'ed-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
    @Input() public data: Array<any> = [];

    constructor(private eventSrv: EventService) {
    }

    ngOnInit() {
        let sub = this.eventSrv.on('update_breadcrumbs')
            .subscribe(
                (data) => {
                    this.data = data;
                }
            );

        this.eventSrv.register('update_breadcrumbs', sub);
    }

    ngOnDestroy() {
        this.eventSrv.deregister('update_breadcrumbs');
    }

}

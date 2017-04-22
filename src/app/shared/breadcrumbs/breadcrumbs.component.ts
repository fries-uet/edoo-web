import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbsService} from "../../services/breadcrumbs.service";
import {EventService} from "../../services/event.service";
import {NavigationStart, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'ed-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
    @Input() public data: Array<any> = [];

    constructor(private eventSrv: EventService,
                private router: Router) {
    }

    ngOnInit() {
        let sub = this.eventSrv.on('update_breadcrumbs')
            .subscribe(
                (data) => {
                    this.data = data;
                }
            );

        this.eventSrv.register('update_breadcrumbs', sub);

        this.router.events
            .subscribe(
                event => {
                    if (event instanceof NavigationStart) {
                        this.onReset();
                    }
                }
            );
    }

    onReset() {
        this.data = [];
    }

    ngOnDestroy() {
        this.eventSrv.deregister('update_breadcrumbs');
    }

}

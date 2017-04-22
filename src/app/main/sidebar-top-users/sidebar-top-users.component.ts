import {Component, OnInit} from '@angular/core';
import {ClassService} from "../../services/class.service";
import {ActivatedRoute} from "@angular/router";
import {EdUser} from "../../definitions/ed-user";

@Component({
    selector: 'ed-sidebar-top-users',
    templateUrl: './sidebar-top-users.component.html',
    styleUrls: ['./sidebar-top-users.component.scss'],
    providers: [ClassService]
})
export class SidebarTopUsersComponent implements OnInit {
    private class_id: string;
    private users: Array<EdUser> = [];

    constructor(private classSrv: ClassService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                params => {
                    this.class_id = params.id || false;
                    this.fetchData();
                }
            );
    }

    fetchData() {
        this.classSrv.getTopUsers(this.class_id)
            .subscribe(
                response => {
                    let data = response.data;
                    this.users = data.users || [];
                }
            );
    }
}

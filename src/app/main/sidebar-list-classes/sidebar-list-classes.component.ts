import {Component, OnInit} from '@angular/core';
import {ClassService} from "../../services/class.service";
import {EdClass} from "../../definitions/ed-class";

@Component({
    selector: 'ed-sidebar-list-classes',
    templateUrl: './sidebar-list-classes.component.html',
    styleUrls: ['./sidebar-list-classes.component.scss']
})
export class SidebarListClassesComponent implements OnInit {
    public listClasses: Array<EdClass> = [];

    constructor(private classSrv: ClassService) {
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.classSrv.getListClasses()
            .subscribe(
                response => {
                    let data = response.data;
                    this.listClasses = data.classes;
                }
            );
    }

}

import {Component, OnInit} from '@angular/core';
import {ClassService} from "../../services/class.service";
import {EdClass} from "../../definitions/ed-class";

@Component({
    selector: 'ed-list-classes',
    templateUrl: './list-classes.component.html',
    styleUrls: ['./list-classes.component.scss'],
    providers: [ClassService]
})
export class ListClassesComponent implements OnInit {
    public classes: Array<EdClass> = [];

    constructor(private classSrv: ClassService) {
    }

    ngOnInit() {
        this.fetchListClasses();
    }

    private fetchListClasses() {
        this.classSrv.getListClasses()
            .subscribe(
                (response) => {
                    let data = response.data;
                    this.classes = data.classes;
                }
            );
    }

}

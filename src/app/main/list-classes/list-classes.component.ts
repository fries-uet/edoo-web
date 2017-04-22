import {Component, OnInit} from '@angular/core';
import {ClassService} from "../../services/class.service";
import {EdClass} from "../../definitions/ed-class";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'ed-list-classes',
    templateUrl: './list-classes.component.html',
    styleUrls: ['./list-classes.component.scss'],
    providers: [ClassService]
})
export class ListClassesComponent implements OnInit {
    public classes: Array<EdClass> = [];

    constructor(private classSrv: ClassService,
                private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Tất cả các lớp môn học');
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

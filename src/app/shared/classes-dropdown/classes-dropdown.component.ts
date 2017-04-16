import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ClassService} from "../../services/class.service";
import {EdClass} from "../../definitions/ed-class";

@Component({
    selector: 'ed-classes-dropdown',
    templateUrl: './classes-dropdown.component.html',
    styleUrls: ['./classes-dropdown.component.scss'],
    providers: [ClassService]
})
export class ClassesDropdownComponent implements OnInit {
    public classes: Array<EdClass> = [];

    constructor(private authSrv: AuthService,
                private classSrv: ClassService) {
    }

    ngOnInit() {
        if (this.authSrv.isLoggedIn()) {
            this.fetchListClasses();
        }
    }

    fetchListClasses() {
        this.classSrv.getListClasses()
            .subscribe(
                response => {
                    let data = response.data;
                    this.classes = data.classes;
                }
            )
    }

}

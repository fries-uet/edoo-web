import {Component, Input, OnInit} from '@angular/core';
import {EdClass} from "../../../definitions/ed-class";

@Component({
    selector: 'ed-class-item',
    templateUrl: './class-item.component.html',
    styleUrls: ['./class-item.component.scss']
})
export class ClassItemComponent implements OnInit {
    @Input() class_: EdClass = null;

    constructor() {
    }

    ngOnInit() {
    }

}

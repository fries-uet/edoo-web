import {Component, Input, OnInit} from '@angular/core';
import {EdClass} from "../../definitions/ed-class";

@Component({
    selector: 'ed-class-metadata',
    templateUrl: './class-metadata.component.html',
    styleUrls: ['./class-metadata.component.scss']
})
export class ClassMetadataComponent implements OnInit {
    @Input() class_: EdClass = null;

    constructor() {
    }

    ngOnInit() {
    }

}

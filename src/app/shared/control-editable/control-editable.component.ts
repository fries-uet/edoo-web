import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'ed-control-editable',
    templateUrl: './control-editable.component.html',
    styleUrls: ['./control-editable.component.scss']
})
export class ControlEditableComponent implements OnInit {
    @Input() public value: string;
    @Output() public valueChange: EventEmitter<string> = new EventEmitter();

    public isEditing: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    onKeyPress(event: KeyboardEvent) {
        if (event.keyCode != 13) {
            return;
        }

        this.toggle();
    }

    toggle() {
        if (this.isEditing) {
            this.emit();
        }

        this.isEditing = !this.isEditing;
    }

    emit() {
        this.valueChange.next(this.value);
    }
}

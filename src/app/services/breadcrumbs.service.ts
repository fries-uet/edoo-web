import {Injectable} from '@angular/core';
import {EventService} from "./event.service";

@Injectable()
export class BreadcrumbsService {
    private data: Array<any> = [];

    constructor(private eventSrv: EventService) {
    }

    getData() {
        return this.data;
    }

    setData(data: Array<any>) {
        this.data = data;
        this.parseData();
        this.eventSrv.emit('update_breadcrumbs', this.data);
    }

    parseData() {
        this.data = this.data.map(
            (item) => {
                let default_ = {
                    link: false,
                    text: ''
                };

                return Object.assign(default_, item);
            }
        )
    }
}

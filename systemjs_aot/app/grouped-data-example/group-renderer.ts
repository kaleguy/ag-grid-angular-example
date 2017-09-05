import {Component} from "@angular/core";

import {ICellRendererParams} from "ag-grid/main";
import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'group-renderer',
    template: `Country: {{params.value}}. Sub Rows: `
})
export class CustomGroupRenderer implements ICellRendererAngularComp {
    public params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

    refresh(params: any): boolean {
        return false;
    }
}

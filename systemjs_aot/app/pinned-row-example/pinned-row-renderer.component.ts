import {Component} from "@angular/core";
import {GridOptions} from "ag-grid/main";
import {StyledComponent} from "./styled-renderer.component";

@Component({
    selector: 'ag-pinned-row-renderer-component',
    templateUrl: './pinned-row-renderer.component.html'
})
export class PinnedRowComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
            rowData: PinnedRowComponent.createRowData(),
            columnDefs: PinnedRowComponent.createColumnDefs(),
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            },
            pinnedTopRowData: [
                {row: "Top Row", number: "Top Number"}
            ],
            pinnedBottomRowData: [
                {row: "Bottom Row", number: "Bottom Number"}
            ]
        }
    }

    private static createColumnDefs() {
        return [
            {
                headerName: "Row",
                field: "row",
                width: 400,
                pinnedRowCellRendererFramework: StyledComponent,
                pinnedRowCellRendererParams: {
                    style: {'font-weight': 'bold'}
                }
            },
            {
                headerName: "Number",
                field: "number",
                width: 399,
                pinnedRowCellRendererFramework: StyledComponent,
                pinnedRowCellRendererParams: {
                    style: {'font-style': 'italic'}
                }
            },
        ];
    }

    private static createRowData() {
        let rowData: any[] = [];

        for (let i = 0; i < 15; i++) {
            rowData.push({
                row: "Row " + i,
                number: Math.round(Math.random() * 100)
            });
        }

        return rowData;
    }
}
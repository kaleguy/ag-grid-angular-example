import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";

@Component({
    selector: "my-app",
    template: `
    <div class="topContainer">
      <div class="topHeader">
        <div class="item details">
          <label> File Name: <input type="text" id="fileName" placeholder="export" /> </label>
          <label> Sheet Name: <input type="text" id="sheetName" placeholder="ag-grid" maxlength="31" /> </label>
          <label>
            Export Mode: <input type="radio" name="mode" value="xlsx" id="xlsxMode" checked="true" />
            <label for="xlsx">.xlsx</label> <input type="radio" name="mode" id="xmlMode" value="xml" />
            <label for="xml">.xml</label>
          </label>
        </div>
        <fieldset class="item">
          <legend>Export Options</legend>
          <div class="options">
            <div>
              <label> <input type="checkbox" id="skipHeader" /> Skip Header </label>
              <label> <input type="checkbox" id="columnGroups" /> Column Groups </label>
              <label> <input type="checkbox" id="skipFooters" /> Skip Footers </label>
            </div>
            <div>
              <label> <input type="checkbox" id="onlySelected" /> Only Selected </label>
              <label> <input type="checkbox" id="useCellCallback" /> Use Cell Callback </label>
              <label> <input type="checkbox" id="processHeaders" /> Format Headers </label>
            </div>
            <div>
              <label> <input type="checkbox" id="skipPinnedTop" /> Skip Pinned Top </label>
              <label> <input type="checkbox" id="skipPinnedBottom" /> Skip Pinned Bottom </label>
              <label> <input type="checkbox" id="skipGroups" /> Skip Groups </label>
            </div>
            <div>
              <label> <input type="checkbox" id="useSpecificColumns" /> Specify Columns </label>
              <label> <input type="checkbox" id="allColumns" /> All Columns </label>
              <label> <input type="checkbox" id="skipGroupR" /> Skip Group R </label>
            </div>
            <div>
              <label> <input type="checkbox" id="appendHeader" /> Append Header </label>
              <label> <input type="checkbox" id="appendFooter" /> Append Footer </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div style="margin: 5px; text-align: right">
        <label> <button (click)="onBtExport()" style="height: 25px; cursor: pointer">Export to Excel</button> </label>
      </div>
      <div class="grid-wrapper">
        <ag-grid-angular
          #agGrid
          style="width: 100%; height: 100%;"
          id="myGrid"
          class="ag-theme-balham"
          [columnDefs]="columnDefs"
          [defaultColDef]="defaultColDef"
          [rowSelection]="rowSelection"
          [pinnedTopRowData]="pinnedTopRowData"
          [pinnedBottomRowData]="pinnedBottomRowData"
          [rowData]="rowData"
          (gridReady)="onGridReady($event)"
        ></ag-grid-angular>
      </div>
    </div>
  `
})
export class AppComponent {
    private gridApi;
    private gridColumnApi;

    private columnDefs;
    private defaultColDef;
    private rowSelection;
    private pinnedTopRowData;
    private pinnedBottomRowData;
    private rowData: [];

    constructor(private http: HttpClient) {
        this.columnDefs = [
            {
                headerName: "Group1",
                children: [
                    {
                        headerName: "Athlete",
                        field: "athlete",
                        width: 150
                    },
                    {
                        headerName: "Age",
                        field: "age",
                        width: 90,
                        cellClassRules: {
                            greenBackground: function(params) {
                                return params.value < 23;
                            },
                            blueBackground: function(params) {
                                return params.value < 20;
                            }
                        }
                    },
                    {
                        headerName: "Country",
                        field: "country",
                        width: 120
                    },
                    {
                        headerName: "Group",
                        valueGetter: "data.country.charAt(0)",
                        width: 75
                    },
                    {
                        headerName: "Year",
                        field: "year",
                        width: 75
                    }
                ]
            },
            {
                headerName: "Group2",
                children: [
                    {
                        headerName: "Date",
                        field: "date",
                        width: 110
                    },
                    {
                        headerName: "Sport",
                        field: "sport",
                        width: 110
                    },
                    {
                        headerName: "Gold",
                        field: "gold",
                        width: 100
                    },
                    {
                        headerName: "Silver",
                        field: "silver",
                        width: 100
                    },
                    {
                        headerName: "Bronze",
                        field: "bronze",
                        width: 100
                    },
                    {
                        headerName: "Total",
                        field: "total",
                        width: 100
                    }
                ]
            }
        ];
        this.defaultColDef = {
            sortable: true,
            filter: true
        };
        this.rowSelection = "multiple";
        this.pinnedTopRowData = [pinnedTopRow];
        this.pinnedBottomRowData = [pinnedBottomRow];
    }

    onBtExport() {
        var params = {
            skipHeader: getBooleanValue("#skipHeader"),
            columnGroups: getBooleanValue("#columnGroups"),
            skipFooters: getBooleanValue("#skipFooters"),
            skipGroups: getBooleanValue("#skipGroups"),
            skipPinnedTop: getBooleanValue("#skipPinnedTop"),
            skipPinnedBottom: getBooleanValue("#skipPinnedBottom"),
            allColumns: getBooleanValue("#allColumns"),
            onlySelected: getBooleanValue("#onlySelected"),
            fileName: document.querySelector("#fileName").value,
            sheetName: document.querySelector("#sheetName").value,
            exportMode: document.querySelector('input[name="mode"]:checked').value
        };
        if (getBooleanValue("#skipGroupR")) {
            params.shouldRowBeSkipped = function(params) {
                return params.node.data.country.charAt(0) === "R";
            };
        }
        if (getBooleanValue("#useCellCallback")) {
            params.processCellCallback = function(params) {
                if (params.value && params.value.toUpperCase) {
                    return params.value.toUpperCase();
                } else {
                    return params.value;
                }
            };
        }
        if (getBooleanValue("#useSpecificColumns")) {
            params.columnKeys = ["country", "bronze"];
        }
        if (getBooleanValue("#processHeaders")) {
            params.processHeaderCallback = function(params) {
                return params.column.getColDef().headerName.toUpperCase();
            };
        }
        if (getBooleanValue("#appendHeader")) {
            params.customHeader = [
                [],
                [
                    {
                        data: {
                            type: "String",
                            value: "Summary"
                        }
                    }
                ],
                [
                    {
                        data: {
                            type: "String",
                            value: "Sales"
                        },
                        mergeAcross: 2
                    },
                    {
                        data: {
                            type: "Number",
                            value: "3695.36"
                        }
                    }
                ],
                []
            ];
        }
        if (getBooleanValue("#appendFooter")) {
            params.customFooter = [
                [],
                [
                    {
                        data: {
                            type: "String",
                            value: "Footer"
                        }
                    }
                ],
                [
                    {
                        data: {
                            type: "String",
                            value: "Purchases"
                        },
                        mergeAcross: 2
                    },
                    {
                        data: {
                            type: "Number",
                            value: "7896.35"
                        }
                    }
                ],
                []
            ];
        }
        this.gridApi.exportDataAsExcel(params);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.http
            .get(
                "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
            )
            .subscribe(data => {
                this.rowData = data;
            });
    }
}

var pinnedTopRow = {
    athlete: "Floating Top Athlete",
    age: 999,
    country: "Floating Top Country",
    year: 2020,
    date: "01-08-2020",
    sport: "Floating Top Sport",
    gold: 22,
    silver: "003",
    bronze: 44,
    total: 55
};
var pinnedBottomRow = {
    athlete: "Floating Bottom Athlete",
    age: 888,
    country: "Floating Bottom Country",
    year: 2030,
    date: "01-08-2030",
    sport: "Floating Bottom Sport",
    gold: 222,
    silver: "005",
    bronze: 244,
    total: 255
};
function getBooleanValue(cssSelector) {
    return document.querySelector(cssSelector).checked === true;
}
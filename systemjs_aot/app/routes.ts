import {Routes} from "@angular/router";
// rich grid
import {RichGridComponent} from "./rich-grid-example/rich-grid.component";
// declarative
import {RichGridDeclarativeComponent} from "./rich-grid-declarative-example/rich-grid-declarative.component";
// simple dynamic components
import {DynamicComponent} from "./dynamic-component-example/dynamic.component";
// rich dynamic component
import {RichComponent} from "./rich-dynamic-component-example/rich.component";
// editor
import {EditorComponent} from "./editor-component-example/editor.component";
// Pinned Row
import {PinnedRowComponent} from "./pinned-row-example/pinned-row-renderer.component";
// full width
import {FullWidthComponent} from "./full-width-example/full-width-renderer.component";
// grouped inner
import {GroupRowComponent} from "./grouped-row-inner-renderer-example/group-row-renderer.component";
// filter
import {FilterComponentComponent} from "./filter-component-example/filter.component";
// master detail
import {MasterComponent} from "./master-detail-example/masterdetail-master.component";
// floating filter
import {FloatingFilterComponent} from "./floating-filter-example/floating-filter.component";
// rxjs
import {RxJsComponentByRow} from "./rxjs-component-example/rxjs-by-row.component";
// infinite pagination
import {InfinitePaginationComponent} from "./infinite-pagination/infinite-pagination.component";
// grouped rows: inner renderer
import {GroupedDataGrid} from "./grouped-data-example/grouped.data.grid";
// aligned grid
import {AlignedGridComponent} from "./aligned-grid-example/aligned-grid.component";

const appRoutes: Routes = [
    {
        path: 'rich-grid',
        component: RichGridComponent,
        data: {
            title: "Rich Grid Example"
        }
    },
    {
        path: 'rich-grid-declarative',
        component: RichGridDeclarativeComponent,
        data: {
            title: "Rich Grid with Declarative Markup"
        }
    },
    {
        path: 'from-component',
        component: DynamicComponent,
        data: {
            title: "Dynamic Angular Component Example"
        }
    },
    {
        path: 'from-rich-component',
        component: RichComponent,
        data: {
            title: "Dynamic Angular Components - Richer Example"
        }
    },
    {
        path: 'editor-component',
        component: EditorComponent,
        data: {
            title: "Cell Editor Component Example"
        }
    },
    {
        path: 'pinned-row',
        component: PinnedRowComponent,
        data: {
            title: "Pinned Row Renderer Example"
        }
    },
    {
        path: 'full-width',
        component: FullWidthComponent,
        data: {
            title: "Full Width Renderer Example"
        }
    },
    {
        path: 'simple-group-row',
        component: GroupedDataGrid,
        data: {
            title: "Grouping with Auto Group Columns Example"
        }
    },
    {
        path: 'group-row',
        component: GroupRowComponent,
        data: {
            title: "Grouped Row Inner Renderer Example"
        }
    },
    {
        path: 'filter',
        component: FilterComponentComponent,
        data: {
            title: "Filters Component Example"
        }
    },
    {
        path: 'master-detail',
        component: MasterComponent,
        data: {
            title: "Master Detail Example"
        }
    },
    {
        path: 'floating-filter',
        component: FloatingFilterComponent,
        data: {
            title: "Floating Filters"
        }
    },
    {
        path: 'infinite-pagination',
        component: InfinitePaginationComponent,
        data: {
            title: "Infinite Pagination"
        }
    },
    {
        path: 'aligned-grids',
        component: AlignedGridComponent,
        data: {
            title: "Aligned Grids Example"
        }
    },
    {
        path: 'rxjs-by-row',
        component: RxJsComponentByRow,
        data: {
            title: "RxJs - Single Row Update Example"
        }
    },
    {
        path: 'rxjs-by-dataset',
        component: RxJsComponentByRow,
        data: {
            title: "RxJs - Full DataSet Update Example"
        }
    },
    {
        path: '', redirectTo: 'rich-grid', pathMatch: 'full'
    }
];

export default appRoutes;

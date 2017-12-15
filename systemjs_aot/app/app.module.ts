import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// simple dynamic component
import {DynamicComponent} from "./dynamic-component-example/dynamic.component";
import {SquareComponent} from "./dynamic-component-example/square.component";
import {ParamsComponent} from "./dynamic-component-example/params.component";
import {CubeComponent} from "./dynamic-component-example/cube.component";
import {CurrencyComponent} from "./dynamic-component-example/currency.component";
import {ChildMessageComponent} from "./dynamic-component-example/child-message.component";
// rich dynamic component
import {RichComponent} from "./rich-dynamic-component-example/rich.component";
import {ClickableModule} from "./rich-dynamic-component-example/clickable.module";
import {RatioModule} from "./rich-dynamic-component-example/ratio.module";
import {RatioParentComponent} from "./rich-dynamic-component-example/ratio.parent.component";
import {ClickableParentComponent} from "./rich-dynamic-component-example/clickable.parent.component";

// for the demo
const appRoutes: Routes = [
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
        path: '', redirectTo: 'from-component', pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        HttpClientModule,
        AgGridModule.withComponents(
            [
                SquareComponent,
                CubeComponent,
                ParamsComponent,
                CurrencyComponent,
                ChildMessageComponent,
                RatioParentComponent,
                ClickableParentComponent
            ]),
        RatioModule,
        ClickableModule
    ],
    declarations: [
        AppComponent,
        DynamicComponent,
        SquareComponent,
        CubeComponent,
        ParamsComponent,
        CurrencyComponent,
        ChildMessageComponent,
        RichComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

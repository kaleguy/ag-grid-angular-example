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

// for the demo§
const appRoutes: Routes = [
    {
        path: 'from-component',
        component: DynamicComponent,
        data: {
            title: "Dynamic Angular Component Example"
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
        RouterModule.forRoot(appRoutes, { useHash: true }),
        HttpClientModule,
        AgGridModule.withComponents(
            [
                SquareComponent,
                CubeComponent,
                ParamsComponent,
                CurrencyComponent,
                ChildMessageComponent
            ]),
    ],
    declarations: [
        AppComponent,
        DynamicComponent,
        SquareComponent,
        CubeComponent,
        ParamsComponent,
        CurrencyComponent,
        ChildMessageComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

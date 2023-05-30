import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {EmpresaModule} from "./features/empresa/empresa.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContratoModule} from "./features/contrato/contrato.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        InputTextModule,
        ButtonModule,
        EmpresaModule,
        ContratoModule,
        CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

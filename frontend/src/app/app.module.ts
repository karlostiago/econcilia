import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { NavbarComponent } from './navbar/navbar.component';
import {EmpresaModule} from "./empresa/empresa.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    EmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

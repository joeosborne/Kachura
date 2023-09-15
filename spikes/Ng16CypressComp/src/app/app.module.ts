import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        RouterLinkWithHref
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

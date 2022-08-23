import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { TypedFormComponent } from './typed-form/typed-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TypedFormComponent} from "./typed-form/typed-form.component";

@NgModule({
  declarations: [
    AppComponent,
    TypedFormComponent,
    // TypedFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

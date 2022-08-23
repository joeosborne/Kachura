import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TypedFormComponent} from "./typed-form/typed-form.component";
import {StandaloneExampleComponent} from "./standalone-example/standalone-example.component";

@NgModule({
  declarations: [
    AppComponent,
    TypedFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StandaloneExampleComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { ObjectFitComponent } from './object-fit/object-fit.component';

@NgModule({
  declarations: [
    AppComponent,
    AspectRatioComponent,
    ContainerComponent,
    DisplayComponent,
    ObjectFitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

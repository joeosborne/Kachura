import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { ObjectFitComponent } from './object-fit/object-fit.component';
import { SandpitComponent } from './sandpit/sandpit.component';
import { TopRBLComponent } from './top-rbl/top-rbl.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  declarations: [
    AppComponent,
    AspectRatioComponent,
    ContainerComponent,
    DisplayComponent,
    ObjectFitComponent,
    SandpitComponent,
    TopRBLComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

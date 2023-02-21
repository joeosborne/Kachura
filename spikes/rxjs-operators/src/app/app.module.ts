import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { TapComponent } from './tap/tap.component';
import { MapAndPluckComponent } from './map-and-pluck/map-and-pluck.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchMapComponent,
    MergeMapComponent,
    TapComponent,
    MapAndPluckComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

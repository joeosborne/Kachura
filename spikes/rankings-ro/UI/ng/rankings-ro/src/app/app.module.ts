import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxerComponent } from './boxer/boxer.component';
import { RankingsComponent } from './rankings/rankings.component';
import { HeaderComponent } from './header/header.component';
import { WeightDivisionsComponent } from './weight-divisions/weight-divisions.component';
import { BoxersComponent } from './boxers/boxers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoxerComponent,
    RankingsComponent,
    HeaderComponent,
    WeightDivisionsComponent,
    BoxersComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

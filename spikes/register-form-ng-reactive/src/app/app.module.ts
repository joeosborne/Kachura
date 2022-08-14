import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LandingComponent } from './landing/landing.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '',   redirectTo: '/registration', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
];

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


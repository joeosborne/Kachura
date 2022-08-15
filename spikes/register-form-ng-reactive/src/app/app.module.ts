import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dasboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
];
//     path: 'servers',
//     // canActivate: [AuthGuard],
//     canActivateChild: [AuthGuard],
//     component: ServersComponent,
//     children: [
//     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
//     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
//   ] },


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent
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


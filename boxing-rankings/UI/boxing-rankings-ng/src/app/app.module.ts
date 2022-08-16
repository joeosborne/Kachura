import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditRankingsComponent } from './admin/edit-rankings/edit-rankings.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LoginComponent } from './admin/login/login.component';
import { RankingsComponent } from './rankings/rankings.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "./material.modules";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
const appRoutes: Routes = [
  { path: '', redirectTo: 'rankings', pathMatch:'full' },
  { path: 'admin', component: LoginComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'edit-rankings', component: EditRankingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditRankingsComponent,
    LoginComponent,
    RankingsComponent
  ],
  imports:[
  BrowserModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

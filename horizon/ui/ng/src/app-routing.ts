import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounsellorsPortalComponent } from './app/counsellors-portal/counsellors-portal.component';
import { RegisterComponent } from './app/register/register.component';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component'; // CLI imports router

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portal', component: CounsellorsPortalComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

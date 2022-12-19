import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CounsellorsPortalComponent } from './counsellors-portal/counsellors-portal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, CounsellorsPortalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

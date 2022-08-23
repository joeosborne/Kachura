import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {TypedFormComponent} from "./app/typed-form/typed-form.component";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//bootstrapApplication(TypedFormComponent).then(r => {});

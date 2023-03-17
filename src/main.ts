import {importProvidersFrom} from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent , {
  providers : [
    importProvidersFrom(AppRoutingModule)
  ]
})

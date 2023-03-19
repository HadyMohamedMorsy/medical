import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent , {
  providers : [
    importProvidersFrom([BrowserAnimationsModule]),
    provideRouter(routes)
  ]
})

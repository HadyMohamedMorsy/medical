import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent , {
  providers : [
    provideRouter(routes)
  ]
})

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { InterceptorInterceptor } from '@core/interceptor/interceptor.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


bootstrapApplication(AppComponent , {
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    },
    importProvidersFrom([BrowserAnimationsModule , HttpClientModule]),
    provideRouter(routes)
  ]
})

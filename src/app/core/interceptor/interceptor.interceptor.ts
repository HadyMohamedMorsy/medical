import { inject, Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { LoadingService } from '@services/loading/loading.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  LoadingService = inject(LoadingService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.LoadingService.show();
    return next.handle(request).pipe(catchError(this.HandlerError),
        finalize(()=> this.LoadingService.hide())
    )
  }

  private HandlerError(err : HttpErrorResponse) {
    let ErrorRequest = "";
    switch(err.status){
      case 400  :
        ErrorRequest = "Bad Request invalid request, such as lacking required request body or parameter";
        break;
      case 401  :
        ErrorRequest = "Unauthorized _failed to authenticate with the server";
        break;
      case 403  :
        ErrorRequest = "Forbidden_authenticated but does not have permission to access the requested resource";
        break;
      case 404  :
        ErrorRequest = "Not Found_the requested resource does not exist";
        break;
      case 412  :
        ErrorRequest = "Precondition Failed Precondition Failed  one or more conditions in the request header fields evaluated to false";
        break;
      case 500  :
        ErrorRequest = "Internal Server Error – a generic error occurred on the server";
        break;
      case 503  :
        ErrorRequest = "Service Unavailable – the requested service is not available";
        break;
        default :
        ErrorRequest = "Internal Server Error – a generic error occurred on the server"
    }
    return throwError(()=> ErrorRequest);
  }

}


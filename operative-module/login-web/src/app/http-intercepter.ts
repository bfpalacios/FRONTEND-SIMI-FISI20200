import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  BASE_PATH = 'http://localhost:8080';
  headers = new HttpHeaders({
    //'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
  });

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone(
      {
        withCredentials: true,
        headers: this.headers
      },
    ))
      .pipe(timeout(60000), catchError(error => {
        return throwError({ ...error, customHttpError: true });
      }));
  }


  /*  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const proxyReq = req.clone({ url: `${ this.BASE_PATH }` ,
       withCredentials: false,
       headers: this.headers});
       return next.handle(proxyReq);
     } */

}
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone({});

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if(event.url?.endsWith('/login') || event.url?.endsWith('/register')){
            const newUser = event.body;
            this.authService.setUser(newUser);
          }
        }
      })
    );
  }
}

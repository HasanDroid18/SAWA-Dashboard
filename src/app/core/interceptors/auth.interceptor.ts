import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // to be done soon, when the api is done
    // const token = this.cookieService.get('token');

    const fakeToken = this.authService.getToken();

    const clonedReq = req.clone({
      withCredentials: true,
      setHeaders: {
        Authorization: fakeToken ? `Bearer ${fakeToken}` : '',
      },
    });

    return next.handle(clonedReq);
  }
}

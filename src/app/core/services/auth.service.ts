import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private configService: ConfigService
  ) {}

  getLoginUrl(): string {
    return this.configService.authUrl + '/login';
  }

  login(userReq: LoginRequest): Observable<any> {
    return this.http
      .post<any>(this.getLoginUrl(), userReq, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          const fakeToken = this.generateFakeToken();
          this.saveToken(fakeToken);
        })
      );
  }

  private generateFakeToken(): string {
    return 'fakeToken_' + Math.random().toString(36).substring(2);
  }

  private saveToken(token: string): void {
    this.cookieService.set('token', token);
  }

  getToken(): string | null {
    return this.cookieService.get('token');
  }

  logout(): void {
    this.cookieService.deleteAll();
  }
}

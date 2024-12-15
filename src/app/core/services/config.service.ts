import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get('/assets/config.json').pipe(
      tap((config) => {
        this.config = config;
        console.log('Config loaded:', config);
      })
    );
  }

  get authUrl(): string {
    return this.config?.auth_url || '';
  }

  get insuranceCenterUrl(): string {
    return this.config?.InsuranceCenterUrl || '';
  }

  get callCenterUrl(): string {
    return this.config?.CallCenterUrl || '';
  }

  get dashboardApiUrl(): string {
    return this.config?.DashboardApiUrl || '';
  }
}

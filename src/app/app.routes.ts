import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AppLayoutComponent } from './layout/app.layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'app-dashboard',
        loadComponent: () =>
          import('./dashboard-page/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'add-user',
        loadComponent: () =>
          import('./user-management/add-user/add/add.component').then(
            (m) => m.AddComponent
          ),
      },
      {
        path: 'search-user',
        loadComponent: () =>
          import('./user-management/search-user/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
    ],
  },

  {
    path: 'notfound',
    loadComponent: () =>
      import('./common-pages/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
  },
  {
    path: 'access',
    loadComponent: () =>
      import('./common-pages/access/access.component').then(
        (m) => m.AccessComponent
      ),
  },
  { path: '**', redirectTo: '/notfound' },
];

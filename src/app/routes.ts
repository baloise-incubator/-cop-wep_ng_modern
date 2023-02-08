import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first-component',
    loadComponent: () =>
      import('./components/first-page.component').then(
        (m) => m.FirstPageComponent
      ),
  },
  {
    path: 'second-component',
    loadComponent: () =>
      import('./components/second-page.component').then(
        (m) => m.SecondPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'first-component',
    pathMatch: 'full',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-component',
  },
];

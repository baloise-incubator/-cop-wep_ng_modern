import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first-component',
    loadComponent: () =>
      import('./pages/first-page/first-page.component').then(
        (m) => m.FirstPageComponent
      ),
  },
  {
    path: 'second-component',
    loadComponent: () =>
      import('./pages/second-page/second-page.component').then(
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

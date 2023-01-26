import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first-component',
    loadChildren: () =>
      import('./pages/first-page/first-page.module').then(
        (m) => m.FirstPageModule
      ),
  },
  {
    path: 'second-component',
    loadChildren: () =>
      import('./pages/second-page/second-page.module').then(
        (m) => m.SecondPageModule
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

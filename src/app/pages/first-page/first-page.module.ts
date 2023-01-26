import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page.component';

@NgModule({
  imports: [
    FirstPageComponent,
    RouterModule.forChild([
      {
        path: '',
        component: FirstPageComponent,
      },
      {
        path: '**',
        redirectTo: 'first-component',
        pathMatch: 'full',
      },
    ]),
  ],
})
export class FirstPageModule {}

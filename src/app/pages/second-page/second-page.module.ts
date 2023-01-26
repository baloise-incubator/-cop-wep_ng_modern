import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page.component';

@NgModule({
  imports: [
    SecondPageComponent,
    RouterModule.forChild([
      {
        path: '',
        component: SecondPageComponent,
      },
      {
        path: '**',
        redirectTo: 'first-component',
        pathMatch: 'full',
      },
    ]),
  ],
})
export class SecondPageModule {}

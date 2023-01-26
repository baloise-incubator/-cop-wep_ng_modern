import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BalHeadingModule,
  BalSpinnerModule,
} from '@baloise/design-system-components-angular';
import { GreetingComponent } from 'src/app/shared/components/greeting/greeting.component';
import { FirstPageComponent } from './first-page.component';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    BalHeadingModule,
    BalSpinnerModule,
    GreetingComponent,
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

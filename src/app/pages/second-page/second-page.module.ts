import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BalHeadingModule, BalSpinnerModule } from '@baloise/design-system-components-angular';
import { GreetingComponent } from 'src/app/shared/components/greeting/greeting.component';
import { SecondPageComponent } from './second-page.component';

@NgModule({
  declarations: [SecondPageComponent],
  imports: [
    BalHeadingModule,
    BalSpinnerModule,
    GreetingComponent,
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

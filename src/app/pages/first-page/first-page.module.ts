import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstPageComponent } from './first-page.component';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    SharedModule,
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

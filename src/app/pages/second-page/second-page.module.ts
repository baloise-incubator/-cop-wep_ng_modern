import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondPageComponent } from './second-page.component';

@NgModule({
  declarations: [SecondPageComponent],
  imports: [
    SharedModule,
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

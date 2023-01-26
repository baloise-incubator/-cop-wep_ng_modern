import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstPageComponent } from './first-page.component';

@NgModule({
  declarations: [FirstPageComponent],
  exports: [FirstPageComponent],
  imports: [SharedModule],
})
export class FirstPageModule {}

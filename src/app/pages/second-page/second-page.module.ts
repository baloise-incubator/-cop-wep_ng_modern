import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondPageComponent } from './second-page.component';

@NgModule({
  declarations: [SecondPageComponent],
  exports: [SecondPageComponent],
  imports: [SharedModule],
})
export class SecondPageModule {}

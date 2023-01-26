import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BalHeadingModule,
  BalSpinnerModule,
} from '@baloise/design-system-components-angular';
import { GreetingComponent } from './components/greeting/greeting.component';

const components = [GreetingComponent];

const modules = [CommonModule, BalHeadingModule, BalSpinnerModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}

import { Component, OnInit } from '@angular/core';
import {
  BalHeadingModule,
  BalSpinnerModule,
} from '@baloise/design-system-components-angular';
import { GreetingComponent } from 'src/app/shared/components/greeting/greeting.component';
import { fetchRandomGreeting } from 'src/app/shared/greeting';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  standalone: true,
  imports: [BalHeadingModule, BalSpinnerModule, GreetingComponent],
})
export class FirstPageComponent {
  getRandomGreeting$ = fetchRandomGreeting();
}

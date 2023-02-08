import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BalHeadingModule,
  BalSpinnerModule,
} from '@baloise/design-system-components-angular';
import { GreetingComponent } from 'src/app/shared/components/greeting/greeting.component';
import { fetchRandomGreeting } from 'src/app/shared/greeting';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  standalone: true,
  imports: [BalHeadingModule, BalSpinnerModule, GreetingComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPageComponent {
  getRandomGreeting$ = fetchRandomGreeting();
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BalHeadingModule,
  BalSpinnerModule,
} from '@baloise/design-system-components-angular';
import { GreetingComponent } from 'src/app/components/greeting.component';
import { fetchRandomGreeting } from 'src/app/greeting';

@Component({
  selector: 'app-second-page',
  template: `
    <bal-heading color="warning">{{ title() }}</bal-heading>

    <div *ngIf="getRandomGreeting$ | async as greeting; else loading">
      <app-greeting [greeting]="greeting.greeting"></app-greeting>
    </div>

    <ng-template #loading>
      <bal-spinner></bal-spinner>
    </ng-template>
  `,
  standalone: true,
  imports: [BalHeadingModule, BalSpinnerModule, GreetingComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPageComponent {
  getRandomGreeting$ = fetchRandomGreeting();

  title() {
    console.log('SecondPageComponent - Change Detection');
    return 'Second Page';
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  BalHeadingModule,
  BalSpinnerModule,
} from '@baloise/design-system-components-angular';
import { Observable } from 'rxjs';
import { GreetingComponent } from 'src/app/components/greeting.component';
import {
  GreetingResponse,
  GreetingService,
} from 'src/app/services/greeting.service';

@Component({
  selector: 'app-second-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BalHeadingModule, BalSpinnerModule, GreetingComponent],
  template: `
    <bal-heading>Second Page</bal-heading>

    <div *ngIf="getRandomGreeting$ | async as greeting; else loading">
      <app-greeting [greeting]="greeting.greeting"></app-greeting>
    </div>

    <ng-template #loading>
      <bal-spinner></bal-spinner>
    </ng-template>
  `,
})
export class SecondPageComponent implements OnInit {
  getRandomGreeting$!: Observable<GreetingResponse>;

  constructor(private greeting: GreetingService) {}

  ngOnInit(): void {
    this.getRandomGreeting$ = this.greeting.fetchRandom();
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BalHeadingModule } from '@baloise/design-system-components-angular';

@Component({
  selector: 'app-greeting',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BalHeadingModule],
  template: `<div class="p-normal has-background-green-1 has-radius-large">
    <bal-heading level="h2">{{ greeting }}</bal-heading>
    <bal-heading level="h3" subtitle>CoP Web</bal-heading>
  </div>`,
})
export class GreetingComponent {
  @Input() greeting = '';
}

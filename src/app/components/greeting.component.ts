import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BalHeadingModule } from '@baloise/design-system-components-angular';

@Component({
  selector: 'app-greeting',
  template: `
    <div class="p-normal has-background-green-1 has-radius-large">
      <bal-heading level="h2">{{ greeting }}</bal-heading>
      <bal-heading level="h3" subtitle color="warning">
        {{ title() }}
      </bal-heading>
    </div>
  `,
  standalone: true,
  imports: [BalHeadingModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent {
  @Input() greeting = '';

  title() {
    console.log('GreetingComponent - Change Detection');
    return 'CoP Web';
  }
}

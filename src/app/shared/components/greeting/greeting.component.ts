import { Component, Input } from '@angular/core';
import { BalHeadingModule } from '@baloise/design-system-components-angular';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  standalone: true,
  imports: [BalHeadingModule],
})
export class GreetingComponent {
  @Input() greeting = '';
}

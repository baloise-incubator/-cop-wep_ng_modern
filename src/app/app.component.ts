import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  template: `
    <bal-app>
      <header class="has-background-primary py-normal">
        <div class="container is-flex fg-small">
          <a
            class="is-link is-inverted"
            routerLink="/first-component"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
          >
            First Component
          </a>
          <a
            class="is-link is-inverted"
            routerLink="/second-component"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
          >
            Second Component
          </a>
        </div>
      </header>
      <main class="container py-large">
        <router-outlet></router-outlet>
      </main>
    </bal-app>
  `,
})
export class AppComponent {}

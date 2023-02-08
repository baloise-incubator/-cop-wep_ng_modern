import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <bal-app>
      <header class="has-background-primary py-normal">
        <div class="container is-flex fg-small">
          <h1
            class="title is-size-medium is-weight-bold has-text-warning m-none"
          >
            {{ title() }}
          </h1>
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
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title() {
    console.log('AppComponent - Change Detection');
    return 'Change Detection';
  }
}

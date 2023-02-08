import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom, NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BalCoreModule } from '@baloise/design-system-components-angular';

import { routes } from './app/routes';
import { AppComponent } from './app/components/app.component';

// reduces change detection validation in dev mode cycle
// enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(BalCoreModule.forRoot()),
  ],
});

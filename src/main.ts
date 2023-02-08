import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BalCoreModule } from '@baloise/design-system-components-angular';

import { routes } from './app/routes';
import { AppComponent } from './app/components/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(BalCoreModule.forRoot()),
  ],
});

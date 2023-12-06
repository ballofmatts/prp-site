import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular-ivy";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Sentry.init({
  dsn: "https://52b0cc3dd73c599c83367d01199b66ca@o4506033222123520.ingest.sentry.io/4506033235034112",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/partyrollpodcast\.com\/api/],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 0.02,
  // Session Replay
  replaysSessionSampleRate: 0.0,
  replaysOnErrorSampleRate: 1.0,

  ignoreErrors: [
    // Ignore routing errors (by bots usually)
    "noMatchError"
  ],
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

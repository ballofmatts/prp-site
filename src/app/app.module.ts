import {ServicesModule} from '@services';
import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import * as Sentry from "@sentry/angular-ivy";

import {AppComponent} from './app.component';
import {EpisodeBlurbsComponent} from './episode-blurbs/episode-blurbs.component';
import {MomentModule} from 'ngx-moment';
import {ComponentsModule} from './components/components.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SeasonsComponent} from './seasons/seasons.component';
import {SupportComponent} from './support/support.component';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
import {EpisodePermalinkComponent} from './episode-permalink/episode-permalink.component';
import {DisqusModule} from 'ngx-disqus';
import {BlurbBoxComponent} from './episode-blurbs/blurb-box/blurb-box.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {Router} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    EpisodeBlurbsComponent,
    SeasonsComponent,
    SupportComponent,
    AboutComponent,
    EpisodePermalinkComponent,
    BlurbBoxComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServicesModule,
    ComponentsModule,
    MomentModule,
    NgxPaginationModule,
    NgPipesModule,
    FontAwesomeModule,
    DisqusModule.forRoot('partyroll')
  ],
  providers: [{
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: false,
    }),
  }, {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {},
    deps: [Sentry.TraceService],
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule {
}

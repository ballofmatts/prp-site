import {ServicesModule} from './services/services.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EpisodeBlurbsComponent} from './episode-blurbs/episode-blurbs.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeBlurbsComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

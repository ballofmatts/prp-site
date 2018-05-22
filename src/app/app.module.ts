import {ServicesModule} from './services/services.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EpisodeBlurbsComponent} from './episode-blurbs/episode-blurbs.component';
import {MomentModule} from 'ngx-moment';
import {MainPageComponent} from './main-page/main-page.component';
import {SignitureComponent} from './components/signiture/signiture.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeBlurbsComponent,
    MainPageComponent,
    SignitureComponent
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

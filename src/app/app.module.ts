import {ServicesModule} from './services/services.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EpisodeBlurbsComponent} from './episode-blurbs/episode-blurbs.component';
import {MomentModule} from 'ngx-moment';
import {MainPageComponent} from './main-page/main-page.component';
import {ComponentsModule} from './components/components.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeBlurbsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    ComponentsModule,
    MomentModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

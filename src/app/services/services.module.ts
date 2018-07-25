import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PodcastRssService} from '@services/podcast-rss.service';
import {PodcastInfoService} from '@services/podcast-info.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    PodcastRssService,
    PodcastInfoService
  ]
})
export class ServicesModule {
}

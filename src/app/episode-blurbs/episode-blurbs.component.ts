import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {Podcast} from '@models';
import {PodcastInfoService, PodcastRssService} from '@services';
import {Observable} from 'rxjs';

const EPISODES_PER_PAGE = 10;

@Component({
  selector: 'prp-episode-blurbs',
  templateUrl: './episode-blurbs.component.html',
  styleUrls: ['./episode-blurbs.component.scss']
})
export class EpisodeBlurbsComponent implements OnInit {
  podcastData: Observable<Podcast> = this.podcastSvc.podcastData;
  showFilter = '';

  config: PaginationInstance = {
    id: 'episodePages',
    itemsPerPage: EPISODES_PER_PAGE,
    currentPage: 1
  };

  constructor(private rssParser: PodcastRssService,
              private podcastSvc: PodcastInfoService) {
  }

  ngOnInit() {
  }
}

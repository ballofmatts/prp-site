import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PodcastRssService} from '@services';
import {Podcast, PodcastItem} from '@models';
import {PermalinkPipe} from '../components/pipes/permalink.pipe';
import {PodcastInfoService} from '@services/podcast-info.service';
import {Observable} from 'rxjs';

import {faArrowLeft, faArrowRight, faCloudDownloadAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prp-episode-permalink',
  templateUrl: './episode-permalink.component.html',
  styleUrls: ['./episode-permalink.component.css']
})
export class EpisodePermalinkComponent implements OnInit {
  podcastData: Observable<Podcast> = this.podcastSvc.podcastData;
  podcastItem: PodcastItem;

  faCloudDownloadAlt = faCloudDownloadAlt;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor(private route: ActivatedRoute,
              private rssParser: PodcastRssService,
              private podcastSvc: PodcastInfoService,
              private permalinkPipe: PermalinkPipe) {
  }

  ngOnInit() {
  }

  getEpisodeInfo(podcastInfo: Podcast): PodcastItem {
    const id = this.route.snapshot.paramMap.get('id');
    if (!!podcastInfo) {
      this.podcastItem = podcastInfo.items.find(item => id === this.permalinkPipe.transform(item.title));
    }
    return this.podcastItem;
  }
}

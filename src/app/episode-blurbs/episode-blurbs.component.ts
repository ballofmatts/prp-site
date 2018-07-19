import {Component, OnInit} from '@angular/core';
import {Parser} from 'xml2js';
import {PaginationInstance} from 'ngx-pagination';
import {Podcast, PodcastMap} from '@models';
import {PodcastRssService} from '@services';

const EPISODES_PER_PAGE = 10;

@Component({
  selector: 'prp-episode-blurbs',
  templateUrl: './episode-blurbs.component.html',
  styleUrls: ['./episode-blurbs.component.scss']
})
export class EpisodeBlurbsComponent implements OnInit {
  podcastData: Podcast;
  parser = new Parser;
  showFilter = '';

  config: PaginationInstance = {
    id: 'episodePages',
    itemsPerPage: EPISODES_PER_PAGE,
    currentPage: 1
  };

  constructor(private rssParser: PodcastRssService) {
  }

  ngOnInit() {
    this.rssParser.getRssFeed().subscribe((data) => {
      this.parser.parseString(data, (err, result) => {
        this.podcastData = PodcastMap.fromOne(result.rss.channel[0]);
        // console.log(this.podcastData);
      });
    });
  }
}

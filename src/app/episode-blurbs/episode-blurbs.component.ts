import {Component, OnInit} from '@angular/core';
import {PodcastRssService} from '../services/podcast-rss.service';
import {PodcastMap} from '../models/podcast.map';
import {Parser} from 'xml2js';
import {Podcast} from '../models/podcast';
import {PaginationInstance} from 'ngx-pagination';

const EPISODES_PER_PAGE = 10;

@Component({
  selector: 'prp-episode-blurbs',
  templateUrl: './episode-blurbs.component.html',
  styleUrls: ['./episode-blurbs.component.css']
})
export class EpisodeBlurbsComponent implements OnInit {
  podcastData: Podcast;
  parser = new Parser;

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

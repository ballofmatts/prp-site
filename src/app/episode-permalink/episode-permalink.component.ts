import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PodcastRssService} from '@services';
import {Podcast, PodcastItem, PodcastMap} from '@models';
import {Parser} from 'xml2js';
import {PermalinkPipe} from '../components/pipes/permalink.pipe';
import {faCloudDownloadAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prp-episode-permalink',
  templateUrl: './episode-permalink.component.html',
  styleUrls: ['./episode-permalink.component.css']
})
export class EpisodePermalinkComponent implements OnInit {
  podcastData: Podcast;
  parser = new Parser;

  podcastItem: PodcastItem;

  faCloudDownloadAlt = faCloudDownloadAlt;


  constructor(private route: ActivatedRoute,
              private rssParser: PodcastRssService,
              private permalinkPipe: PermalinkPipe) {
  }

  ngOnInit() {
    this.getPodcastInfo();
  }

  getPodcastInfo(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // parse rss feed. again.
    this.rssParser.getRssFeed().subscribe((data) => {
      this.parser.parseString(data, (err, result) => {
        this.podcastData = PodcastMap.fromOne(result.rss.channel[0]);
        this.podcastItem = this.podcastData.items.find(item => {
          return id === this.permalinkPipe.transform(item.title);
        });
        // console.log(this.podcastData);
      });
    });

  }

}

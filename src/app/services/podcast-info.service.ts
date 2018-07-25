import {Injectable} from '@angular/core';
import {Podcast, PodcastMap} from '@models';
import {PodcastRssService} from '@services/podcast-rss.service';
import {Parser} from 'xml2js';
import {BehaviorSubject, Observable} from 'rxjs';
import {PodcastItem} from '@models/podcastItem';
import {PermalinkPipe} from '../components/pipes/permalink.pipe';

@Injectable()
export class PodcastInfoService {
  parser = new Parser;
  isInitialized = false;
  private _podcastData: BehaviorSubject<Podcast> = new BehaviorSubject<Podcast>(null);
  podcastData: Observable<Podcast> = this._podcastData.asObservable();

  constructor(private rssParser: PodcastRssService,
              private permalinkPipe: PermalinkPipe) {
    this.initPodcastInfo();
  }

  parsePrevNext(items: PodcastItem[]) {
    for (const item of items) {
      const tempPrev = items.find(subItem => {
        return (subItem.showType === item.showType
          && subItem.season === item.season
          && subItem.episode === item.episode - 1);
      });
      if (tempPrev) {
        item.prevEpisode = this.permalinkPipe.transform(tempPrev.title);
      }
      const tempNext = items.find(subItem => {
        return (subItem.showType === item.showType
          && subItem.season === item.season
          && subItem.episode === item.episode + 1);
      });
      if (tempNext) {
        item.nextEpisode = this.permalinkPipe.transform(tempNext.title);
      }

    }
  }

  private initPodcastInfo() {
    if (!this.isInitialized) {
      this.rssParser.getRssFeed().subscribe((data) => {
        this.parser.parseString(data, (err, result) => {
          const tempInfo = PodcastMap.fromOne(result.rss.channel[0]);
          this.parsePrevNext(tempInfo.items);
          this._podcastData.next(tempInfo);
          this.isInitialized = true;
        });
      });
    }
  }

}

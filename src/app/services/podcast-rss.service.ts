import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class PodcastRssService {
  podcastURL = environment.podcast.url;

  constructor(private http: HttpClient) {
  }

  getRssFeed() {
    return this.http.get(this.podcastURL, {responseType: 'text'});
  }
}

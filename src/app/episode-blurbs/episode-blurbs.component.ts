import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {Podcast, PodcastItem} from '@models';
import {PodcastInfoService} from '@services';

const EPISODES_PER_PAGE = 10;

@Component({
  selector: 'prp-episode-blurbs',
  templateUrl: './episode-blurbs.component.html',
  styleUrls: ['./episode-blurbs.component.scss']
})
export class EpisodeBlurbsComponent implements OnInit {
  podcastData: Podcast;

  // filters
  showTypeFilter = 'all';
  seasonFilter = 'all';
  sortOrder = '-pubDate';
  availableSeasons = [];

  filteredPodcastData: PodcastItem[] = [];

  // pagination config
  config: PaginationInstance = {
    id: 'episodePages',
    itemsPerPage: EPISODES_PER_PAGE,
    currentPage: 1
  };

  constructor(
    private podcastInfoService: PodcastInfoService,
  ) {
  }

  ngOnInit() {
    // init the podcast data
    this.podcastInfoService.podcastData.subscribe((podcast: Podcast) => {
      this.podcastData = podcast;
      this.onFiltersChanged();
    });
  }

  onPageChange(page: number) {
    this.config.currentPage = page;
    window.scrollTo(0, 0);
  }

  onFiltersChanged() {
    if (!!this.podcastData) {
      let tempPodcastData = this.podcastData.items;
      // filter by show
      if (this.showTypeFilter !== 'all') {
        tempPodcastData = tempPodcastData.filter(item => item.showType === this.showTypeFilter);
      }

      // filter by season
      if (this.seasonFilter !== 'all') {
        tempPodcastData = tempPodcastData.filter(item => item.season.toString(10) === this.seasonFilter);
      }

      // write the filtered list to main
      this.filteredPodcastData = tempPodcastData;
      // set page back to 1
      this.onPageChange(1);
    }
  }

  ohShowChange() {
    // if they picked an individual show, get the available seasons based on actual podcast data
    if (this.showTypeFilter !== 'all') {
      this.availableSeasons = this.podcastData.items
        .filter(item => item.showType === this.showTypeFilter)
        .map(item => item.season);
      this.availableSeasons = [...new Set(this.availableSeasons)].sort();
    } else { // otherwise, clear em out
      this.availableSeasons = [];
    }
    this.seasonFilter = 'all';
    this.onFiltersChanged();
  }
}

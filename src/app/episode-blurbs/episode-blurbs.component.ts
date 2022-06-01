import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {Podcast, PodcastItem} from '@models';
import {PodcastInfoService} from '@services';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

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
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.podcastInfoService.podcastData
      .pipe(
        switchMap((podcast: Podcast) => {
          // init the podcast data
          this.podcastData = podcast;
          return this.route.queryParams;
        })
      )
      .subscribe(params => {
        // then handle any query params
        if (!!params.show) {
          switch (params.show) {
            case 'party-roll':
              this.showTypeFilter = 'Party Roll';
              break;
            case 'savage-roll':
              this.showTypeFilter = 'Savage Roll';
              break;
            case 'snack-roll':
              this.showTypeFilter = 'Snack Roll';
              break;
          }
        }
        this.onShowChange();
        if (!!params.season && !isNaN(params.season) && this.availableSeasons.includes(parseInt(params.season, 10))) {
          this.seasonFilter = params.season;
        }
        if (!!params.order) {
          switch (params.order) {
            case '-1':
              this.sortOrder = '-pubDate';
              break;
            case '1':
              this.sortOrder = 'pubDate';
              break;
          }
        }
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

  onShowChange() {
    if (!!this.podcastData) {
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
}

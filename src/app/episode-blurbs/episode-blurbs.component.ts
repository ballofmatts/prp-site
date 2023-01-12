import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {Podcast, PodcastItem} from '@models';
import {PodcastInfoService} from '@services';
import {ActivatedRoute, Params, Router} from '@angular/router';
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

  filteredEpisodes: PodcastItem[] = [];

  showFilterMap = {
    'all': 'All Shows',
    'party-roll': 'Party Roll',
    'savage-roll': 'Savage Roll',
    'snack-roll': 'Snack Roll'
  };

  sortOrderMap = {
    '-1': '-pubDate',
    '1': 'pubDate'
  };

  // pagination config
  config: PaginationInstance = {
    id: 'episodePages',
    itemsPerPage: EPISODES_PER_PAGE,
    currentPage: 1
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private podcastInfoService: PodcastInfoService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.podcastInfoService.podcastData
      .pipe(
        switchMap((podcast: Podcast) => {
          // init the podcast data
          this.podcastData = podcast;
          return this.activatedRoute.queryParams;
        })
      )
      .subscribe(params => {
        // then handle any query params
        if (!!params.show) {
          this.showTypeFilter = params.show;
        }
        this.onShowChange();
        if (!!params.season && !isNaN(params.season) && this.availableSeasons.includes(parseInt(params.season, 10))) {
          this.seasonFilter = params.season;
        }
        if (!!params.order) {
          this.sortOrder = params.order;
        } else {
          this.sortOrder = '-1';
        }
        if (!!params.p) {
          this.config.currentPage = params.p;
        }

        this.onFiltersChanged(false);
      });
  }

  onPageChange(page: number) {
    this.config.currentPage = page;
    this.updateQueryParams({p: page.toString(10)});
    window.scrollTo(0, 0);
  }

  onSortChanged() {
    const queryParams: Params = {};
    this.onPageChange(1);
    this.updateQueryParams({order: this.sortOrder, p: '1'});
  }

  onFiltersChanged(resetPages: boolean = true) {
    if (!!this.podcastData) {
      const queryParams: Params = {};
      let tempEpisodes = this.podcastData.items;
      // filter by show
      if (this.showTypeFilter !== 'all') {
        tempEpisodes = tempEpisodes.filter(item => item.showType === this.showFilterMap[this.showTypeFilter]);
      }
      queryParams.show = this.showTypeFilter;

      // filter by season
      if (this.seasonFilter !== 'all') {
        tempEpisodes = tempEpisodes.filter(item => item.season.toString(10) === this.seasonFilter);
      }
      queryParams.season = this.seasonFilter;

      // write the filtered list to main
      this.filteredEpisodes = tempEpisodes;

      if (resetPages) {
        queryParams.p = '1';
        this.onPageChange(1);
      }
      this.config.totalItems = this.filteredEpisodes.length;

      // set the new queryparams
      this.updateQueryParams(queryParams);
    }
  }

  onShowChange() {
    if (!!this.podcastData) {
      // if they picked an individual show, get the available seasons based on actual podcast data
      if (this.showTypeFilter !== 'all') {
        this.availableSeasons = this.podcastData.items
          .filter(item => item.showType === this.showFilterMap[this.showTypeFilter])
          .map(item => item.season);
        this.availableSeasons = [...new Set(this.availableSeasons)].sort();
      } else { // otherwise, clear em out
        this.availableSeasons = [];
      }
      this.seasonFilter = 'all';
      this.onFiltersChanged(true);
    }
  }

  updateQueryParams(params: Params) {
    this.router.navigate(
      ['.'],
      {
        relativeTo: this.activatedRoute,
        queryParams: params,
        queryParamsHandling: 'merge',
      });
  }
}

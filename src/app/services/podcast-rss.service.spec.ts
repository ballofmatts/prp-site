import { TestBed, inject } from '@angular/core/testing';

import { PodcastRssService } from './podcast-rss.service';

describe('PodcastRssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodcastRssService]
    });
  });

  it('should be created', inject([PodcastRssService], (service: PodcastRssService) => {
    expect(service).toBeTruthy();
  }));
});

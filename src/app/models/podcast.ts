import {PodcastItem} from './podcastItem';

export class Podcast {
  copyright: string;
  description: string;
  docs: string;
  image: {
    link: string;
    title: string;
    utl: string;
  };
  items: PodcastItem[];
  itunesAuthor: string;
  itunesExplicit: boolean;
  itunesImage: string;
  itunesOwner: {
    email: string;
    name: string;
  };
  itunesSubtitle: string;
  itunesSummary: string;
  lastBuildDate: Date;
  link: string;
  pubDate: Date;
  title: string;
}

export class PodcastItem {
  title: string;
  pubDate: Date;
  link: string;
  itunesImage: string;
  description: string;
  itunesDuration: string;
  itunesExplicit: boolean;
  showType?: ShowTypes;
  season?: number;
  episode?: number;
  nextEpisode?: string;
  prevEpisode?: string;
}

export enum ShowTypes {
  PARTY_ROLL = 'Party Roll',
  SAVAGE_ROLL =  'Savage Roll'
}

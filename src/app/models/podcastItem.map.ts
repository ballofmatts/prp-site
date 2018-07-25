import {PodcastItem, ShowTypes} from './podcastItem';

export class PodcastItemMap {

  static fromOne(val: any): PodcastItem {
    if (!val) {
      return null;
    }

    // finding show types
    let showType = null;
    if (val.title[0].includes('Party Roll')) {
      showType = ShowTypes.PARTY_ROLL;
    } else if (val.title[0].includes('Savage Roll')) {
      showType = ShowTypes.SAVAGE_ROLL;
    }

    // finding season & episode
    let season = 1;
    let episode = 1;
    const pattern = /Roll - S(\d)E(\d+)/u;
    const result = pattern.exec(val.title[0]);
    if (result) {
      season = Number.parseInt(result[1], 10);
      episode = Number.parseInt(result[2], 10);
    }

    const item = <PodcastItem>{
      title: val.title[0],
      pubDate: new Date(val.pubDate[0]),
      link: val.link[0],
      itunesImage: val['itunes:image'][0]['$'].href,
      description: val.description[0].replace(/\u00A0/gi, ' '),
      itunesDuration: val['itunes:duration'][0],
      itunesExplicit: (val['itunes:explicit'][0] === 'yes'),
      showType: showType,
      season: season,
      episode: episode
    };
    return item;
  }

  static fromMany(vals: any) {
    if (!vals) {
      return [];
    }

    return vals.map((v: any) => PodcastItemMap.fromOne(v));
  }
}

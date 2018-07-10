import {PodcastItem, ShowTypes} from './podcastItem';

export class PodcastItemMap {

  static fromOne(val: any): PodcastItem {
    if (!val) {
      return null;
    }

    let showType = null;
    if (val.title[0].includes('Party Roll')) {
      showType = ShowTypes.PARTY_ROLL;
    } else if (val.title[0].includes('Savage Roll')) {
      showType = ShowTypes.SAVAGE_ROLL;
    }

    let season = 1;
    const pattern = /Roll - S(\d)/u;
    const result = pattern.exec(val.title[0]);
    if (result) {
      season = Number.parseInt(result[1], 10);
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
      season: season
    };
    // console.log(item);
    return item;
  }

  static fromMany(vals: any) {
    if (!vals) {
      return [];
    }

    return vals.map((v: any) => PodcastItemMap.fromOne(v));
  }


}

import {PodcastItem} from './podcastItem';

export class PodcastItemMap {

  static fromOne(val: any): PodcastItem {
    if (!val) {
      return null;
    }

    const item = <PodcastItem>{
      title: val.title[0],
      pubDate: new Date(val.pubDate[0]),
      link: val.link[0],
      itunesImage: val['itunes:image'][0]['$'].href,
      description: val.description[0],
      itunesDuration: val['itunes:duration'][0],
      itunesExplicit: (val['itunes:explicit'][0] === 'yes'),
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

import {Podcast} from './podcast';
import {PodcastItemMap} from './podcastItem.map';

export class PodcastMap {

  static fromOne(val: any): Podcast {
    if (!val) {
      return null;
    }

    const item = <Podcast>{
      copyright: val.copyright[0],
      description: val.description[0],
      docs: val.docs[0],
      image: {
        link: val.image[0].link[0],
        title: val.image[0].title[0],
        utl: val.image[0].url[0]
      },
      items: PodcastItemMap.fromMany(val.item),
      itunesAuthor: val['itunes:author'][0],
      itunesExplicit: (val['itunes:explicit'][0] === 'yes'),
      itunesImage: val['itunes:image'][0]['$'].href,
      itunesOwner: {
        email: val['itunes:owner'][0]['itunes:email'][0],
        name: val['itunes:owner'][0]['itunes:name'][0]
      },
      itunesSummary: val['itunes:summary'][0],
      lastBuildDate: new Date(val.lastBuildDate[0]),
      link: val.link[0],
      pubDate: new Date(val.pubDate[0]),
      title: val.title[0]
    };
    // console.log(item);
    return item;
  }

  static fromMany(vals: any) {
    if (!vals) {
      return [];
    }

    return vals.map((v: any) => PodcastMap.fromOne(v));
  }


}

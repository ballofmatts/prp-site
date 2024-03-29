import {Component, OnInit} from '@angular/core';
import {faHeart, faRocket, faRss} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faPatreon, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import packageInfo from '../../package.json';

@Component({
  selector: 'prp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  today: Date = new Date();
  appVersion: string = packageInfo.version;

  // media icons
  faRss = faRss;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
  faA = faRocket;
  faHeart = faHeart;

  ngOnInit() {
    console.log('oi m8 pretty cheeky to go rootin around in here');
    console.log('tell matt on twitter that you found this and he\'ll most likely tell you good job');
  }
}

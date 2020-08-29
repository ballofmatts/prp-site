import {Component, OnInit} from '@angular/core';
import {faRocket, faRss} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'prp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  today: Date = new Date();

  // media icons
  faRss = faRss;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faA = faRocket;

  ngOnInit() {
    console.log('oi m8 pretty cheeky to go rootin around in here');
    console.log('tell matt on twitter that you found this and he\'ll most likely tell you good job');
  }
}

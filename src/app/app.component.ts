import {Component} from '@angular/core';
import {faRocket, faRss} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today: Date = new Date();

  // media icons
  faRss = faRss;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faA = faRocket;
}

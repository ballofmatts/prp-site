import {Component} from '@angular/core';
import {faRss} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: Date = new Date();

  // media icons
  faRss = faRss;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
}

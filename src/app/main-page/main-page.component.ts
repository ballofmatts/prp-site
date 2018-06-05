import {Component, OnInit} from '@angular/core';
import {faRss} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'prp-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  today: Date = new Date();

  // media icons
  faRss = faRss;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;

  constructor() {
  }

  ngOnInit() {
  }

}

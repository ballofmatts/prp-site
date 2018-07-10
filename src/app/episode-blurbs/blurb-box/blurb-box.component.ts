import {Component, Input, OnInit} from '@angular/core';
import {PodcastItem} from '@models';
import {faHeadphones, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prp-blurb-box',
  templateUrl: './blurb-box.component.html',
  styleUrls: ['./blurb-box.component.scss']
})
export class BlurbBoxComponent implements OnInit {
  @Input()
  item: PodcastItem;

  faPlusSquare = faPlusSquare;
  faHeadphones = faHeadphones;

  collapsed = true;

  constructor() {
  }

  ngOnInit() {
  }

}

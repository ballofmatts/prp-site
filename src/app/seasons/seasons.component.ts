import {Component, OnInit} from '@angular/core';
import {faBeer} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prp-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  faBeer = faBeer;

  constructor() {
  }

  ngOnInit() {
  }

}

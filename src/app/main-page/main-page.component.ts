import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'prp-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  today: Date = new Date();
  tabbs = ['test', 'test2', 'test4'];

  constructor() {
  }

  ngOnInit() {
  }

}
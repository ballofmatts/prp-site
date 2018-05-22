import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'prp-signiture',
  templateUrl: './signiture.component.html',
  styleUrls: ['./signiture.component.scss']
})
export class SignitureComponent implements OnInit {
  showName = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleName(action: boolean) {
    this.showName = action;
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'prp-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  showName = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleName(action: boolean) {
    this.showName = action;
  }
}

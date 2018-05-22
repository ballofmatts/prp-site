import {AfterContentInit, Component} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <div class="tabs is-centered is-large">
      <ul>
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.is-active]="tab.active">
          <a href="#">{{tab.title}}</a>
        </li>
      </ul>
    </div>
    <ng-content></ng-content>`
})
export class TabsComponent {

  tabs: TabComponent[] = [];

  constructor() {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }

}

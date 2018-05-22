import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
  selector: 'tab',
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {

  @Input() title: string;
  @Input() active = false;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

}

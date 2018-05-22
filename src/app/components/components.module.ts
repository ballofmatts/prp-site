import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SignitureComponent} from './signiture/signiture.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tabs/tab.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SignitureComponent,
    TabsComponent,
    TabComponent
  ],
  providers: [],
  exports: [
    SignitureComponent,
    TabsComponent,
    TabComponent
  ]
})
export class ComponentsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SignatureComponent} from './signature/signature.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tabs/tab.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SignatureComponent,
    TabsComponent,
    TabComponent
  ],
  providers: [],
  exports: [
    SignatureComponent,
    TabsComponent,
    TabComponent
  ]
})
export class ComponentsModule {
}

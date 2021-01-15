import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PermalinkPipe} from './pipes/permalink.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PermalinkPipe
  ],
  providers: [
    PermalinkPipe
  ],
  exports: [
    PermalinkPipe
  ]
})
export class ComponentsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PermalinkPipe} from './pipes/permalink.pipe';
import {PermalinkDisqusPipe} from './pipes/permalink-disqus.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PermalinkPipe,
    PermalinkDisqusPipe
  ],
  providers: [
    PermalinkPipe,
    PermalinkDisqusPipe
  ],
  exports: [
    PermalinkPipe,
    PermalinkDisqusPipe
  ]
})
export class ComponentsModule {
}

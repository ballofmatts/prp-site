import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SignatureComponent} from './signature/signature.component';
import {PermalinkPipe} from './pipes/permalink.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SignatureComponent,
    PermalinkPipe
  ],
  providers: [
    PermalinkPipe
  ],
  exports: [
    SignatureComponent,
    PermalinkPipe
  ]
})
export class ComponentsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SignatureComponent} from './signature/signature.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SignatureComponent
  ],
  providers: [],
  exports: [
    SignatureComponent
  ]
})
export class ComponentsModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }

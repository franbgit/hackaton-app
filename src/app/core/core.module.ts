import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansService } from './services/plans/plans.service';
import { FiltersService } from './services/filters/filters.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PlansService,
    FiltersService,
  ]
})
export class CoreModule { }

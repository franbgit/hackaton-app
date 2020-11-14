import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsService } from './services/events/events.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EventsService
  ]
})
export class CoreModule { }

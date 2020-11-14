import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsService } from './services/events/events.service';
import { VolunteersService } from './services/volunteers/volunteers.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EventsService,
    VolunteersService
  ]
})
export class CoreModule { }

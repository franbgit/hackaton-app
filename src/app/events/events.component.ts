import { Component, OnInit } from '@angular/core';

import { Event } from '../event.model';

import { EventsService } from '../core/services/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];

  filters = [
    {type: 'meatty', active: false, description: 'meatty'},
    {type: 'veggy', active: false, description: 'veggy'},
  ];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.events = this.eventsService.getAllEvents();
  }

  clickEvent(id: number): void {
    console.log('event');
    console.log(id);
  }

  clickFilter = (currentFilter: string) => {
    const clickedFilters = this.filters.filter((item) => (item.type === currentFilter) ? !item.active : item.active);
    const filterTypes = clickedFilters.map(a => a.type);
    this.events = this.eventsService.filterEvents(filterTypes);
  }
}

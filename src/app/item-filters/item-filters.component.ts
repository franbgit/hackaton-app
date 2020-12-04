import { Component, OnInit } from '@angular/core';

// import { Event } from '../event.model';

// import { EventsService } from '../core/services/events/events.service';

@Component({
  selector: 'app-item-filters',
  templateUrl: './item-filters.component.html',
  styleUrls: ['./item-filters.component.scss']
})
export class ItemFiltersComponent implements OnInit {

  // events: Event[] = [];
  // currentFilters: any;

  // itemFilters = [
  //   {type: 'restaurants', filters: [
  //     {type: 'traditional-maltese', active: true, description: 'Traditional Maltese'},
  //     {type: 'vegetarian', active: true, description: 'Vegetarian'},
  //   ]},
  //   {type: 'volunteering', filters: [
  //     {type: 'ong1', active: true, description: 'ong1'},
  //     {type: 'ong2', active: true, description: 'ong2'},
  //   ]}
  // ];

  // constructor(
  //   private eventsService: EventsService
  // ) { }

  ngOnInit(): void {
  //   this.currentFilters = this.itemFilters.find((filter) => filter.type === '');
  }

  // clickFilter = (id: string, currentFilter: string) => {
  //   // const clickedFilters = this.filters.filter((item) => (item.type === currentFilter) ? !item.active : item.active);
  //   // const filterTypes = clickedFilters.map(a => a.type);
  //   // this.events = this.eventsService.filterEvents(filterTypes);
  // }
}

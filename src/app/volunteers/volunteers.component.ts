import { Component, OnInit } from '@angular/core';

import { Volunteer } from '../volunteer.model';

import { VolunteersService } from '../core/services/volunteers/volunteers.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  events: Volunteer[] = [];

  filters = [
    {type: 'ong1', active: true, description: 'ong1'},
    {type: 'ong2', active: true, description: 'ong2'},
  ];

  constructor(
    private volunteersService: VolunteersService
  ) { }

  ngOnInit(): void {
    this.events = this.volunteersService.getAllEvents();
  }

  clickEvent(id: number): void {
    console.log('event');
    console.log(id);
  }

  clickFilter = (currentFilter: string) => {
    const clickedFilters = this.filters.filter((item) => (item.type === currentFilter) ? !item.active : item.active);
    const filterTypes = clickedFilters.map(a => a.type);
    this.events = this.volunteersService.filterEvents(filterTypes);
  }
}

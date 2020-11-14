import { Injectable } from '@angular/core';

import { Volunteer } from '../../../volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {

  events: Volunteer[] = [
    {
      id: '1',
      image: 'assets/images/wildlife-rescue-team.jpg',
      title: 'Nature Trust Turtle Rescue',
      location: 'Malta',
      type: 'ong2',
    },
    {
      id: '2',
      image: 'assets/images/wwf.jpg',
      title: 'WWF',
      location: 'Malta',
      type: 'ong1',
    },
    {
      id: '3',
      image: 'assets/images/greenpeace.png',
      title: 'Greenpeace',
      location: 'Malta',
      type: 'ong2',
    },
    {
      id: '4',
      image: 'assets/images/unicef.jpg',
      title: 'Unicef',
      location: 'Malta',
      type: 'ong2',
    },
  ];
  constructor() { }

  getAllEvents(): Volunteer[] {
    return this.events;
  }

  getEvent(id: string): Volunteer | undefined {
    return this.events.find(item => id === item.id);
  }

  filterEvents(filters: string[]): Volunteer[] {
    return this.events.filter(item => filters.indexOf(item.type) > -1);
  }
}

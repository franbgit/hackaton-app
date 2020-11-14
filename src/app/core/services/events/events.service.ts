import { Injectable } from '@angular/core';

import { Event } from '../../../event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: Event[] = [
    {
      id: '1',
      image: 'assets/images/Restaurant_1.jpg',
      title: 'Gululu',
      location: 'St Julians',
      type: 'traditional-maltese',
    },
    {
      id: '2',
      image: 'assets/images/Restaurant_2.jpg',
      title: 'IL Terrazzo',
      location: 'Xlendi',
      type: 'vegetarian',
    },
    {
      id: '3',
      image: 'assets/images/Restaurant_3.jpg',
      title: 'Soul Food Restaurant',
      location: 'Valletta',
      type: 'vegetarian',
    },
    {
      id: '4',
      image: 'assets/images/Restaurant_4.jpg',
      title: 'Ta\' Kris',
      location: 'Sliema',
      type: 'traditional-maltese',
    },
    {
      id: '5',
      image: 'assets/images/Restaurant_5.jpg',
      title: 'Fontanella',
      location: 'Mdina',
      type: 'vegetarian',
    }
  ];
  constructor() { }

  getAllEvents(): Event[] {
    return this.events;
  }

  getEvent(id: string): Event | undefined {
    return this.events.find(item => id === item.id);
  }

  filterEvents(filters: string[]): Event[] {
    return this.events.filter(item => filters.indexOf(item.type) > -1);
  }
}

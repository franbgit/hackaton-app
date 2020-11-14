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
      price: 0,
      description: 'Place: Valletta',
      type: 'maltese',
    },
    {
      id: '2',
      image: 'assets/images/Restaurant_2.jpg',
      title: 'IL Terrazzo',
      price: 0,
      description: 'Place: Malta',
      type: 'veggy',
    },
    {
      id: '3',
      image: 'assets/images/Restaurant_3.jpg',
      title: 'Soul Food Restaurant',
      price: 3,
      description: 'Place: Sliema',
      type: 'veggy',
    },
    {
      id: '4',
      image: 'assets/images/Restaurant_4.jpg',
      title: 'Ta\' Kris',
      price: 80000,
      description: 'bla bla bla bla bla',
      type: 'maltese',
    },
    {
      id: '5',
      image: 'assets/images/Restaurant_5.jpg',
      title: 'Fontanella',
      price: 80000,
      description: 'bla bla bla bla bla',
      type: 'veggy',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
      type: 'meatty',
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

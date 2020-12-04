import { Injectable } from '@angular/core';

import { eatingPlacesFilters } from './eatingPlacesFilters';
import { volunteeringFilters } from './volunteeringFilters';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  currentFilterId = 'eatingPlaces';

  filters = {
    eatingPlaces: eatingPlacesFilters,
    volunteering: volunteeringFilters,
  }

  constructor() { }

  getCurrentFilterId() {
    return this.currentFilterId;
  }

  setCurrentFilterId(filterId: string) {
    this.currentFilterId = filterId;
  }

  getCurrentFilters() {
    return this.filters[this.currentFilterId];
  }
}

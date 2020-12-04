import { Injectable } from '@angular/core';

import { FiltersService } from '../filters/filters.service';

import { Plan } from '../../../plan.model';

import { eatingPlaces } from './eatingPlaces';
import { volunteering } from './volunteering';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  plans = {
    'eatingPlaces': eatingPlaces,
    'volunteering': volunteering
  }

  constructor(
    private filtersService: FiltersService
  ) { }

  getAllPlans = () => {
    return this.plans[this.filtersService.getCurrentFilterId()];
  }

  getPlan(id: string): Plan | undefined {
    return this.plans[this.filtersService.getCurrentFilterId()].find(item => id === item.id);
  }

  filterPlans(filters: string[]): Plan[] {
    return this.plans[this.filtersService.getCurrentFilterId()].filter(item => filters.indexOf(item.type) > -1);
  }
}

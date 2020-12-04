import { Component, OnInit } from '@angular/core';

import { Plan } from '../plan.model';

import { PlansService } from '../core/services/plans/plans.service';
import { FiltersService } from '../core/services/filters/filters.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {

  currentFilters: any;
  filters = [];
  plans: Plan[] = [];

  // filters = [
  //   {type: 'traditional-maltese', active: true, description: 'Traditional Maltese'},
  //   {type: 'vegetarian', active: true, description: 'Vegetarian'},
  // ];

  constructor(
    private plansService: PlansService,
    private filtersService: FiltersService,
  ) {}

  ngOnInit(): void {
    this.filters = JSON.parse(JSON.stringify(this.filtersService.getCurrentFilters()));
    this.plans = this.plansService.getAllPlans();
  }

  clickPlan(id: number): void {
    console.log('plan');
    console.log(id);
  }

  clickFilter = (id: string, currentFilter: string) => {
    const clickedFilters = this.filters.filter((item) => (item.type === currentFilter) ? !item.active : item.active);
    const filterTypes = clickedFilters.map(a => a.type);
    this.plans = this.plansService.filterPlans(filterTypes);
  }
}

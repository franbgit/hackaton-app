import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FiltersService } from '../core/services/filters/filters.service';

@Component({
  selector: 'app-plan-pages-wrapper',
  templateUrl: './plan-pages-wrapper.component.html',
  styleUrls: ['./plan-pages-wrapper.component.scss']
})
export class PlanPagesWrapperComponent implements OnInit {

  path: string;

  constructor(
    private route: ActivatedRoute,
    private filtersService: FiltersService,
  ) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
    this.filtersService.setCurrentFilterId(this.path);
  }
}

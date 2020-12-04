import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PlansService } from '../core/services/plans/plans.service';
import { Plan } from '../plan.model';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit {

  plan: Plan | undefined;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private plansService: PlansService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.plan = this.plansService.getPlan(id);
    });
  }

  addCart(): void {

  }

}

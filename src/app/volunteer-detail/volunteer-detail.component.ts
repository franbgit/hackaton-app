import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VolunteersService } from '../core/services/volunteers/volunteers.service';
import { Volunteer } from '../volunteer.model';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.scss']
})
export class VolunteerDetailComponent implements OnInit {

  event: Volunteer | undefined;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private productsService: VolunteersService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.event = this.productsService.getEvent(id);
    });
  }

  addCart(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventsService } from '../core/services/events/events.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  event: Event | undefined;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private productsService: EventsService,
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventsService } from '../core/services/events/events.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {

  event: Event | undefined;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private productsService: EventsService,
  ) { }

  ngOnInit(): void {
    console.log('---' + this.route.toString());
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.event = this.productsService.getEvent(id);
    });
  }

  addCart(): void {

  }

}

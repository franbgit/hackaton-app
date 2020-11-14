import {
  Component,
  Input,
  Output,
  EventEmitter,
  /*OnChanges,
  SimpleChanges,*/
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';

import { Volunteer } from '../volunteer.model';
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements /*OnChanges,*/ OnInit, DoCheck, OnDestroy {

  @Input() event: Volunteer | undefined;
  @Output() eventClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
      console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //     console.log('2. ngOnChanges');
  //     console.log(changes);
  // }

  ngOnInit(): void {
      console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
      console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void {
      console.log('5. ngOnDestroy');
  }

  addCart(): void {
      console.log('añadir al carrito');
      this.eventClicked.emit(this.event && this.event.id);
  }


}

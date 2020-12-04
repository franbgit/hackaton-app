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

import { Plan } from '../plan.model';

@Component({
  selector: 'app-single-plan',
  templateUrl: './single-plan.component.html',
  styleUrls: ['./single-plan.component.scss']
})
export class SinglePlanComponent implements OnInit {
  @Input() plan: Plan | undefined;
  @Output() planClicked: EventEmitter<any> = new EventEmitter();

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
      this.planClicked.emit(this.plan && this.plan.id);
  }

}

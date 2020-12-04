import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPagesWrapperComponent } from './plan-pages-wrapper.component';

describe('PlanPagesWrapperComponent', () => {
  let component: PlanPagesWrapperComponent;
  let fixture: ComponentFixture<PlanPagesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPagesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPagesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

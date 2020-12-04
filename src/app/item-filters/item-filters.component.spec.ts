import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFiltersComponent } from './item-filters.component';

describe('ItemFiltersComponent', () => {
  let component: ItemFiltersComponent;
  let fixture: ComponentFixture<ItemFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

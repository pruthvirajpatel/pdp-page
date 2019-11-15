import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpDetailsFiltersComponent } from './pdp-details-filters.component';

describe('PdpDetailsFiltersComponent', () => {
  let component: PdpDetailsFiltersComponent;
  let fixture: ComponentFixture<PdpDetailsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpDetailsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpDetailsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

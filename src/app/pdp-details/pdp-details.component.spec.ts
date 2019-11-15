import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpDetailsComponent } from './pdp-details.component';

describe('PdpDetailsComponent', () => {
  let component: PdpDetailsComponent;
  let fixture: ComponentFixture<PdpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

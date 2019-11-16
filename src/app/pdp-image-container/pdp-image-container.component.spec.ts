import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpImageContainerComponent } from './pdp-image-container.component';

describe('PdpImageContainerComponent', () => {
  let component: PdpImageContainerComponent;
  let fixture: ComponentFixture<PdpImageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpImageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

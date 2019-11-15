import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpContainerComponent } from './pdp-container.component';

describe('PdpContainerComponent', () => {
  let component: PdpContainerComponent;
  let fixture: ComponentFixture<PdpContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

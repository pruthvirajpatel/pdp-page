import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesStripComponent } from './features-strip.component';

describe('FeaturesStripComponent', () => {
  let component: FeaturesStripComponent;
  let fixture: ComponentFixture<FeaturesStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

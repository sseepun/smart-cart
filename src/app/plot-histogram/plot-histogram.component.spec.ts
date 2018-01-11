import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotHistogramComponent } from './plot-histogram.component';

describe('PlotHistogramComponent', () => {
  let component: PlotHistogramComponent;
  let fixture: ComponentFixture<PlotHistogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotHistogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

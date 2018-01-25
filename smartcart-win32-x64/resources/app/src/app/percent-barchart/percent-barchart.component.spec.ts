import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentBarchartComponent } from './percent-barchart.component';

describe('PercentBarchartComponent', () => {
  let component: PercentBarchartComponent;
  let fixture: ComponentFixture<PercentBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

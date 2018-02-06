import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaStatisticPageComponent } from './usa-statistic-page.component';

describe('UsaStatisticPageComponent', () => {
  let component: UsaStatisticPageComponent;
  let fixture: ComponentFixture<UsaStatisticPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaStatisticPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaStatisticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

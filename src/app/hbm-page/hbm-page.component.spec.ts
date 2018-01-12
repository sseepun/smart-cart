import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbmPageComponent } from './hbm-page.component';

describe('HbmPageComponent', () => {
  let component: HbmPageComponent;
  let fixture: ComponentFixture<HbmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

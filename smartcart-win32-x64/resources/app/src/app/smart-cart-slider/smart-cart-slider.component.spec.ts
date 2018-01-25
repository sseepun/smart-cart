import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCartSliderComponent } from './smart-cart-slider.component';

describe('SmartCartSliderComponent', () => {
  let component: SmartCartSliderComponent;
  let fixture: ComponentFixture<SmartCartSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCartSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCartSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

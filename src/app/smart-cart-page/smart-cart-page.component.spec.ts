import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCartPageComponent } from './smart-cart-page.component';

describe('SmartCartPageComponent', () => {
  let component: SmartCartPageComponent;
  let fixture: ComponentFixture<SmartCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

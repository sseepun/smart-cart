import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCartAppComponent } from './smart-cart-app.component';

describe('SmartCartAppComponent', () => {
  let component: SmartCartAppComponent;
  let fixture: ComponentFixture<SmartCartAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCartAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

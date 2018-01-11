import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerySalePageComponent } from './grocery-sale-page.component';

describe('GrocerySalePageComponent', () => {
  let component: GrocerySalePageComponent;
  let fixture: ComponentFixture<GrocerySalePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerySalePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerySalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

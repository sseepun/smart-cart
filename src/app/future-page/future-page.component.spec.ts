import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePageComponent } from './future-page.component';

describe('FuturePageComponent', () => {
  let component: FuturePageComponent;
  let fixture: ComponentFixture<FuturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

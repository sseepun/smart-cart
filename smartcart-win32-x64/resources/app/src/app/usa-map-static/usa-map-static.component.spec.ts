import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaMapStaticComponent } from './usa-map-static.component';

describe('UsaMapStaticComponent', () => {
  let component: UsaMapStaticComponent;
  let fixture: ComponentFixture<UsaMapStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaMapStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaMapStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

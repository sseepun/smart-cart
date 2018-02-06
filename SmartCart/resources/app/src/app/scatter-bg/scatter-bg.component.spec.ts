import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterBgComponent } from './scatter-bg.component';

describe('ScatterBgComponent', () => {
  let component: ScatterBgComponent;
  let fixture: ComponentFixture<ScatterBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

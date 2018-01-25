import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveGlobeHalfComponent } from './interactive-globe-half.component';

describe('InteractiveGlobeHalfComponent', () => {
  let component: InteractiveGlobeHalfComponent;
  let fixture: ComponentFixture<InteractiveGlobeHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveGlobeHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveGlobeHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

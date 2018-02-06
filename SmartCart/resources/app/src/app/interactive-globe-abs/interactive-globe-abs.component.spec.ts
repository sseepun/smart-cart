import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveGlobeAbsComponent } from './interactive-globe-abs.component';

describe('InteractiveGlobeAbsComponent', () => {
  let component: InteractiveGlobeAbsComponent;
  let fixture: ComponentFixture<InteractiveGlobeAbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveGlobeAbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveGlobeAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

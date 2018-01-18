import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlBdPageComponent } from './ml-bd-page.component';

describe('MlBdPageComponent', () => {
  let component: MlBdPageComponent;
  let fixture: ComponentFixture<MlBdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlBdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlBdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaManeePageComponent } from './persona-manee-page.component';

describe('PersonaManeePageComponent', () => {
  let component: PersonaManeePageComponent;
  let fixture: ComponentFixture<PersonaManeePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaManeePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaManeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

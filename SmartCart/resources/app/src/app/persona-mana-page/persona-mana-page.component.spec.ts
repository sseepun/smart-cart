import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaManaPageComponent } from './persona-mana-page.component';

describe('PersonaManaPageComponent', () => {
  let component: PersonaManaPageComponent;
  let fixture: ComponentFixture<PersonaManaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaManaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaManaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

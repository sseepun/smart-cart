import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateButtonSetComponent } from './paginate-button-set.component';

describe('PaginateButtonSetComponent', () => {
  let component: PaginateButtonSetComponent;
  let fixture: ComponentFixture<PaginateButtonSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginateButtonSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateButtonSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

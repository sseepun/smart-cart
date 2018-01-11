import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCleaningPageComponent } from './data-cleaning-page.component';

describe('DataCleaningPageComponent', () => {
  let component: DataCleaningPageComponent;
  let fixture: ComponentFixture<DataCleaningPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCleaningPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCleaningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

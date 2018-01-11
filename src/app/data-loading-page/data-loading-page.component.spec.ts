import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoadingPageComponent } from './data-loading-page.component';

describe('DataLoadingPageComponent', () => {
  let component: DataLoadingPageComponent;
  let fixture: ComponentFixture<DataLoadingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLoadingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

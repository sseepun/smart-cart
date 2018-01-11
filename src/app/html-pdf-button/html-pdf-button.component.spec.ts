import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPdfButtonComponent } from './html-pdf-button.component';

describe('HtmlPdfButtonComponent', () => {
  let component: HtmlPdfButtonComponent;
  let fixture: ComponentFixture<HtmlPdfButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlPdfButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlPdfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

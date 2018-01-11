import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent implements OnInit {

  @Input() pageId = 0;
  @Input() page;
  private host;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    let self = this;
    self.host = d3.select(self.element.nativeElement); 
    self.pageChange();
  }

  pageChange() {
    let self = this;
    if (self.page == self.pageId) {
      self.host.select('#introduction-page').style('opacity', 1)
        .style('pointer-events', 'auto');
    } else {
      self.host.select('#introduction-page').style('opacity', 0)
        .style('pointer-events', 'none');
    }
  }

}

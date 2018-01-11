import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-data-cleaning-page',
  templateUrl: './data-cleaning-page.component.html',
  styleUrls: ['./data-cleaning-page.component.css']
})
export class DataCleaningPageComponent implements OnInit {

  @Input() rainData;
  @Output() doneCleaning:EventEmitter<any> = new EventEmitter();
  constructor() { }


  ngOnInit() {
    let self = this;
    if (typeof self.rainData == 'object') self.processDone();
    else self.processStart();
  }

  processStart() {
    let self = this;
    d3.timeout(function() {
      self.processDone();
    }, 100);
  }

  processDone() {
    let self = this;
    d3.timeout(function() {
      self.doneCleaning.emit(true);
    }, 100);
  }

}

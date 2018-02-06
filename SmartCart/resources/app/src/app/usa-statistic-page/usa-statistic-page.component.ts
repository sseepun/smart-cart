import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-usa-statistic-page',
  templateUrl: './usa-statistic-page.component.html',
  styleUrls: ['./usa-statistic-page.component.css']
})
export class UsaStatisticPageComponent implements OnInit {

  @Input() resources;
  private host;
  private selectedYear = 2014;
  private info;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement).select('#us-statistic-page');

    if (this.selectedYear == 2014) this.info = {stores:'37,688', percent:'+0'};
    else if (this.selectedYear == 2015) this.info = {stores:'38,105', percent:'+1.11'};
    else if (this.selectedYear == 2016) this.info = {stores:'38,441', percent:'+0.88'};
  }

  yearActive(year) {
    if (this.selectedYear == year) return true;
    else return false;
  }
  changeYear(year) {
    this.selectedYear = year;
    if (year == 2014) this.info = {stores:'37,688', percent:'+0'};
    else if (year == 2015) this.info = {stores:'38,105', percent:'+1.11'};
    else if (year == 2016) this.info = {stores:'38,441', percent:'+0.88'};
  }

}

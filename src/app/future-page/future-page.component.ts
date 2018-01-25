import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { resource } from 'selenium-webdriver/http';
import * as d3 from 'd3';

@Component({
  selector: 'app-future-page',
  templateUrl: './future-page.component.html',
  styleUrls: ['./future-page.component.css']
})
export class FuturePageComponent implements OnInit {

  @Input() resources;
  private stage = 0;
  private host;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement);
  }

  nextStage() {
    let self = this;
    self.stage++;
    var current = self.host.select('#stage'+self.stage);
    if (!current.empty()) current.style('opacity', 1);
  }
  previousStage() {
    let self = this;
    self.stage--;
    var current = self.host.select('#stage'+(self.stage+1));
    if (!current.empty()) current.style('opacity', 0);
  }
  initStage() {
    let self = this;
    self.stage = 0;
    self.host.select('#stage1').style('opacity', 0);
    self.host.select('#stage2').style('opacity', 0);
    self.host.select('#stage3').style('opacity', 0);
  }

}

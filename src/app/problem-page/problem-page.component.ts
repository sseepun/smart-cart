import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.css']
})
export class ProblemPageComponent implements OnInit {

  private host;
  private stage = 0;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement).select('#problem-page');

    // d3.timeout(()=>{this.nextStage()}, 2500);
    // d3.timeout(()=>{this.nextStage()}, 5000);
  }

  nextStage() {
    let self = this;
    self.stage += 1;

    self.host.selectAll('.stage-'+self.stage).style('opacity', 1);
    self.host.select('img.stage').style('opacity', 0.25);
  }
  previousStage() {
    let self = this;
    
    self.host.selectAll('.stage-'+self.stage).style('opacity', 0);
    if (self.stage==1) self.host.select('img.stage').style('opacity', 0);
    self.stage -= 1;
  }
  initStagePage1() {
    let self = this;
    self.stage = 0;
    self.host.selectAll('.stage-1').style('opacity', 0);
    self.host.selectAll('.stage-2').style('opacity', 0);
    self.host.select('img.stage').style('opacity', 0);
  }

}

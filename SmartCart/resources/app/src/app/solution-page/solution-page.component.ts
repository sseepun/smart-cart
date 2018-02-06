import { Component, OnInit, ElementRef, animate, Input } from '@angular/core';
import * as d3 from 'd3';
import { resource } from 'selenium-webdriver/http';
declare var particlesJS: any;

@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent implements OnInit {

  @Input() resources;
  private host;
  private nfStage = 0;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement);
    particlesJS.load('particles-js', this.resources.particleFile, null);
  }

  nextStage() {
    this.nfStage++;
    if (this.nfStage==4) {
      this.host.select('#particles-js').style('opacity', 0.4);
      this.host.selectAll('.star-tag').style('opacity', 0);
    } else if (this.nfStage==5) {
      this.host.select('#particles-js').style('opacity', 0);
      this.host.selectAll('.star-tag').style('opacity', 1);
    } else {
      this.host.select('#particles-js').style('opacity', 0);
      this.host.selectAll('.star-tag').style('opacity', 0);
    }
  }
  previousStage() {
    this.nfStage--;
    if (this.nfStage==4) {
      this.host.select('#particles-js').style('opacity', 0.4);
      this.host.selectAll('.star-tag').style('opacity', 0);
    } else if (this.nfStage==5) {
      this.host.select('#particles-js').style('opacity', 0);
      this.host.selectAll('.star-tag').style('opacity', 1);
    } else {
      this.host.select('#particles-js').style('opacity', 0);
      this.host.selectAll('.star-tag').style('opacity', 0);
    }
  }
  initStage() {
    this.nfStage = 0;
    this.host.select('#particles-js').style('opacity', 0);
    this.host.selectAll('.star-tag').style('opacity', 0);
  }

}

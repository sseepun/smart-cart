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
  private counter = 0;
  private nfStage = 0;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement).select('#solution-page');
    // this.nutritionFactAnim();
    // this.animationProcess();    
    
    particlesJS.load('particles-js', this.resources.particleFile, null);
  }

  nutritionFactAnim() {
    let self = this;
    var animTime = 5;
    self.nfStage += 1;

    if (self.nfStage==1) {
      self.host.select('#nutrition-fact'+self.nfStage).select('img').style('opacity', 1);
      self.host.select('#nutrition-fact'+self.nfStage).style('opacity', 1);
      d3.timeout(()=>{self.nutritionFactAnim()}, animTime);
    } else if (self.nfStage==6) {
      self.host.select('#nutrition-fact'+self.nfStage).select('img').style('opacity', 1);
      self.host.select('#nutrition-fact'+self.nfStage).style('opacity', 1);
      self.host.select('#nutrition-fact'+(self.nfStage-1)).select('img').style('opacity', 0.2);
    } else if (self.nfStage<6) {
      self.host.select('#nutrition-fact'+self.nfStage).select('img').style('opacity', 1);
      self.host.select('#nutrition-fact'+self.nfStage).style('opacity', 1);
      self.host.select('#nutrition-fact'+(self.nfStage-1)).select('img').style('opacity', 0.2);
      d3.timeout(()=>{self.nutritionFactAnim()}, animTime);
    }
  }

  animationProcess() {
    let self = this;
    self.counter = (self.counter+1)%8;
    var prevCounter1 = (self.counter+7)%8,
        prevCounter2 = (self.counter+6)%8,
        prevCounter3 = (self.counter+5)%8;
        // prevCounter4 = (self.counter+4)%8;

    self.host.select('#app-icon'+(self.counter+1)).style('opacity', 1);
    self.host.select('#app-icon'+(prevCounter1+1)).style('opacity', 1);
    self.host.select('#app-icon'+(prevCounter2+1)).style('opacity', 1);
    self.host.select('#app-icon'+(prevCounter3+1)).style('opacity', 0);
    // self.host.select('#app-icon'+(prevCounter4+1)).style('opacity', 0);
    d3.timeout(()=>{self.animationProcess()}, 180);
  }

}

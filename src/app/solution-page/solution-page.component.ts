import { Component, OnInit, ElementRef, animate } from '@angular/core';
import * as d3 from 'd3';
declare var particlesJS: any;

@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent implements OnInit {

  private host;
  private nfStage = 0;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement).select('#solution-page');
    this.nutritionFactAnim();
    
    particlesJS.load('particles-js', 'assets/json/particles.json', null);
  }

  nutritionFactAnim() {
    let self = this;
    var animTime = 650;
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

}

import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {

  @Input() resources;
  private surveyType = 0;
  private surveyInfo = {from:'2,800', percent:80, source:'Consumer Reports'};

  private scaleReady = false;
  private host;
  private svg;
  private workSpace;
  private spec: Spec;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement).select('#survey-page');
    this.setupVariables();
    this.setupSurveyScale();
  }

  setupVariables() {
    let self = this;
    var width = 1000,
        height = 324;
    
    self.spec = {
      animTime: 1000,
      width: width,
      height: height,
      scaleH: d3.scaleLinear().domain([0, 100]).range([0, height]),
      manShopper: 'M416.7,72.8L416.7,72.8h-1.2h-11.3c-0.6,1-1.4,2.6-2.6,3.7c-2.4,2.4-5.6,3.6-8.8,3.6 s-6.3-1.1-8.8-3.5l-3.9-3.8h-11.5H340h-11.5l-3.9,3.7c-2.4,2.4-5.6,3.6-8.8,3.6c-3.2,0-6.3-1.2-8.7-3.7c-0.3-0.3-0.9-0.8-0.9-1.1 v-143l0.3-2.2l1.1-1.6l1.7-0.9l2-0.2l1.8,0.2l1.8,0.9l1.3,1.6l0.7,2.2l22.3,105.4l-26.7,26.7c-1.7,1.7-1.7,4.6,0,6.3 c0.9,0.9,2,1.3,3.1,1.3s2.3-0.4,3.1-1.3l23.6-23.6l0.4,0.7l2,2.5l2.2,1.8l2.7,1.6l2.7,0.9l3.4,0.4l2.9-0.4l3.1-0.9l2.5-1.6l2.7-1.8 l0.8-1.2l21.7,21.7c0.9,0.9,2,1.3,3.1,1.3c1.1,0,2.3-0.4,3.1-1.3c1.7-1.7,1.7-4.6,0-6.3l-24.3-24.3l0.2-1.4l-23-118.6l-2.5-8.9 l-3.1-8.1l-4.1-7.4l-5.4-6.1l-6.5-5.1l-7.4-3.8l-8.2-2.4l-9-0.6h-83.2l-9,0.6l-8.3,2.4l-7.4,3.8l-6.5,5.1l-5.4,6.1l-4.5,7.4 l-3.1,8.1l-2.5,8.9L149.6,38.8L150,42l0.9,3.1l1.6,2.4l1.8,2.7L157,52l2.5,1.6l3.1,0.9l2.9,0.4l3.3-0.4l2.7-0.9l2.7-1.6l2.3-1.8 l2-2.5l1.6-2.5l1.4-3.1l0.4-3.1l22.6-106.8l0.7-2.2l1.3-1.6l1.8-0.9l1.8-0.2l2,0.2l1.8,0.9l1.2,1.6l0.5,2.2V238l0.2,3.8l1.1,3.8 l1.8,3.4l2,3.1l2.7,2.4l3.1,1.8l3.8,1.1l3.8,0.7l4.3-0.7l3.8-1.1l3.6-1.8l2.7-2.4l2.5-3.1l1.8-3.4l1.4-3.8l0.3-3.8V65.7l0.6-3.3 l1.5-2.3l2.2-1.3l2.1-0.2l2.1,0.2l2.2,1.3l1.6,2.3l0.7,3.3v172.4l0.2,3.8l1.3,3.8l1.8,3.4l2.4,3.1l2.7,2.4l3.6,1.8l3.8,1.1l4.3,0.7 l3.8-0.7l3.8-1.1l3.1-1.8l2.7-2.4l2-3.1l1.8-3.4l1.2-3.8l0.6-3.8v-93.8l-0.1-0.4l0,0h16l0,0h16l0,0l0,0h16l0,0l0,0l48.1,0.2 c0.6,0,1.1,0,1.6-0.2c0.2-0.1,0.4-0.1,0.6-0.3h0.1c0.2-0.2,0.4-0.3,0.6-0.5l0.2-0.2c0.1-0.1,0.3-0.3,0.4-0.4l0.2-0.3 c0.1-0.1,0.2-0.3,0.2-0.4l0.1-0.3c0.1-0.2,0.1-0.3,0.2-0.5l0.1-0.3c0-0.2,0.1-0.3,0.1-0.5l5-50.6c0.1-0.6,0-1.3-0.2-1.8l0.1-0.9 h3.7c4,0,7.3-3,7.3-7.1C422.8,76.1,420.1,73.3,416.7,72.8z M306.2,90.2c2.8,1.2,5.8,1.9,8.7,2.1l0.9,13.5h-8.1L306.2,90.2z M310.4,135.4l-1.9-20.6h7.9l1.3,20.7L310.4,135.4z M323.8,90.9c2.6-0.8,5-2.1,7.2-4.1h1.3l0.6,19h-8.2L323.8,90.9z M326.5,135.4 l-1.3-20.6h7.9l0.6,20.7L326.5,135.4z M341.2,86.8h9.2v19h-8.6L341.2,86.8z M342.7,135.4l-0.6-20.6h7.9v20.7L342.7,135.4z M366.1,135.4l-7.3,0.1v-20.7h7.9L366.1,135.4z M367,105.8h-8.6v-19h9.2L367,105.8z M382.2,135.4l-7.3,0.1l0.6-20.6h7.9 L382.2,135.4z M384,105.8h-8.1l0.6-19h1.3c2.2,2,4.6,3.2,7.2,4.1L384,105.8z M398.4,135.4l-7.2,0.1l1.3-20.6h7.9L398.4,135.4z M401.1,105.8h-8.2l0.8-13.6c3-0.1,6-0.8,8.7-2L401.1,105.8z',
      womanShopper: 'M105,24.3L63.4-95.2l-2-4.3l-2.7-4.5l-3.6-4.7l-4-4.5l-5.2-4l-5.8-3.2l-6.7-1.9l-7.2-0.6 h-70.5l-7,0.4l-6,2l-5.2,2.9l-4.2,3.8l-3.8,4l-3.1,4.9l-2.7,4.7l-1.8,4.9l-41.5,119.6l-0.9,2.9l-0.2,3.1l0.4,3.1l0.3,0.9 l-30.3,30.4c-1.7,1.7-1.7,4.6,0,6.3c0.9,0.9,2,1.3,3.1,1.3s2.3-0.4,3.1-1.3l29.1-29.2l2.1,1.3l3.1,1.4l2.9,0.5h3.2l3.2-0.5l0.6-0.1 l13.6,13.8l-5.1,14.9h-2.9h-28.6h-11.6l-3.9,3.7c-2.4,2.4-5.6,3.6-8.8,3.6s-6.3-1.1-8.8-3.5c-1.1-1.1-2-2.8-2.6-3.8h-11.1h-1.2l0,0 c-3.5,0.6-6.1,3.3-6.1,7c0,4,3.3,7.1,7.3,7.1h3.7l0.1,0.9c-0.1,0.5-0.2,1.1-0.1,1.7l5,50.8c0,0.2,0.1,0.3,0.1,0.5l0.1,0.3 c0,0.1,0.1,0.3,0.1,0.4s0.1,0.3,0.2,0.4l0.2,0.2c0.1,0.2,0.2,0.3,0.3,0.4l0.2,0.3l0.3,0.3c0.4,0.4,0.9,0.5,1.4,0.7s1,0.1,1.6,0.1 l0,0h16l0,0h16l0,0l0,0h16l0,0l0,0l48,0.1c0.6,0,1.1,0,1.6-0.2c0.2-0.1,0.4-0.1,0.6-0.3h0.1c0.2-0.2,0.4-0.3,0.6-0.5l0.2-0.2 c0.1-0.1,0.3-0.3,0.4-0.4l0.2-0.3c0.1-0.1,0.2-0.3,0.2-0.4l0.1-0.3c0.1-0.2,0.1-0.3,0.2-0.5v-0.3c0-0.2,0.1-0.6,0.1-0.8l2.6-27.1 h3.2v128l0.3,3.3l0.9,3.6l1.6,2.9l2.5,2.7l2.5,2l3.1,1.8l3.2,1.1l3.8,0.4l3.4-0.4l3.6-1.1l2.9-1.8l2.7-2l2-2.7l1.8-2.9l1.2-3.6 l0.6-3.3V113.1h14v128v3.3l1,3.6l1.5,2.9l2.2,2.7l2.4,2l3.1,1.8l3.4,1.1l3.8,0.4l3.3-0.4l3.6-1.1l2.9-1.8l2.7-2l2-2.7l1.8-2.9 l0.9-3.6l0.2-3.3v-128h56.2L30.3-58.3l-0.9-3l0.6-2.2l1.1-1.8l1.8-0.9l2-0.4l2,0.7l1.8,1.6l1.6,2.7l34.3,96.4l1.1,2.7l2,2.5l2.2,2 l2.7,1.8l2.7,0.8l3.1,0.5h3.2l3.4-0.5l2.7-1.5l2.5-1.8l2-2.4l1.8-2.5l0.9-2.9l0.7-3.1v-3.1L105,24.3z M-156.8,90.5 c2.8,1.2,5.8,1.9,8.7,2.1l0.8,13.5h-8.1L-156.8,90.5z M-152.6,135.7l-1.9-20.6h7.9l1.3,20.7L-152.6,135.7z M-139.2,91.2 c2.6-0.8,5-2.1,7.2-4.1h1.3l0.6,19h-8.2L-139.2,91.2z M-136.5,135.7l-1.2-20.6h7.8l0.6,20.7L-136.5,135.7z M-121.8,87.1h8.5v19 h-7.9L-121.8,87.1z M-120.3,135.7l-0.7-20.6h7.9v20.7L-120.3,135.7z M-92.3,39.4l1.4-1.9l1.5-2.7l34-96.9l1.1-2.7l2-1.3l2-0.7 l2,0.7l1.6,1.1l1.1,2l0.5,2.5l-0.7,3.1L-83,48.8L-92.3,39.4z M-104.3,87.1h7.8l-6.5,19h-1.3V87.1z M-96.9,135.7l-7.3,0.1v-20.7h7.9 L-96.9,135.7z M-80.8,135.7l-7.3,0.1l0.6-20.6h7.9L-80.8,135.7z M-64.6,135.6l-7.2,0.1l1.3-20.6h7.9L-64.6,135.6z',
      manHead: '224.9,-155 228.5,-148.7 233,-142.9 238.5,-138.4 244.8,-134.9 251.9,-132.6    259.3,-131.7 267.2,-132.6 274.3,-134.9 280.8,-138.4 286.1,-142.9 291.1,-148.7 294.4,-155 296.4,-162.2 297.1,-169.5    296.4,-177.4 294.4,-184.6 291.1,-191 286.1,-196.4 280.8,-201.3 274.3,-204.7 267.2,-206.7 259.3,-207.4 251.9,-206.7    244.8,-204.7 238.5,-201.3 233,-196.4 228.5,-191 224.9,-184.6 222.7,-177.4 221.8,-169.5 222.7,-162.2',
      womanHead: '-40.6,-155.4 -37.2,-149.1 -32.5,-143.5 -27.1,-139 -20.4,-135.4 -13.5,-133.2    -5.6,-132.3 1.8,-133.2 8.9,-135.4 15.2,-139 21,-143.5 25.5,-149.1 29.1,-155.4 31.3,-162.5 32.2,-170 31.3,-177.8 29.1,-185    25.5,-191.5 21,-197.1 15.2,-201.8 8.9,-205.2 1.8,-207.4 -5.6,-208.1 -13.5,-207.4 -20.4,-205.2 -27.1,-201.8 -32.5,-197.1    -37.2,-191.5 -40.6,-185 -42.8,-177.8 -43.5,-170 -42.8,-162.5'
    };

    self.svg = self.host.select('#survey-scale').select('svg');
    if (self.svg.empty()) {
      self.svg = self.host.select('#survey-scale').append('svg')
        .attr('width', '100%').attr('opacity', 1)
        .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
        .attr('viewBox', '0 0 '+width+' '+height);
      self.workSpace = self.svg.append('g').attr('id', 'work-space')
        .attr('clip-path', 'url(#work-space-clip)');
      // Clip-path
      var clipPath = self.svg.append('defs').append('clipPath').attr('id', 'work-space-clip')
        .style('fill', 'none')
        .attr('transform', 'scale(0.68)translate('+(0.36*self.spec.width)+','
          +(0.66*self.spec.height)+')');
      clipPath.append('path')
        .attr('d', self.spec.manShopper+' '+self.spec.womanShopper);
      clipPath.append('polygon').attr('points', self.spec.manHead);
      clipPath.append('polygon').attr('points', self.spec.womanHead);
    } else {
      self.workSpace = self.svg.select('g#work-space');
    }
  }
  setupSurveyScale() {
    let self = this;

    self.workSpace.append('rect')
      .attr('width', self.spec.width).attr('height', self.spec.height)
      .style('fill', '#3e3e3e').attr('opacity', 1);
    var rectPercent = self.workSpace.append('rect').attr('id', 'percentage')
      .attr('y', self.spec.height)
      .attr('width', self.spec.width).attr('height', 0)
      .style('fill', 'orange');
    d3.timeout(()=>{
      self.scaleReady = true;
      rectPercent.transition().duration(self.spec.animTime)
        .attr('y', self.spec.height-self.spec.scaleH(self.surveyInfo.percent))
        .attr('height', self.spec.scaleH(self.surveyInfo.percent));
    }, 500);
    
    var shopperSpace = self.svg.append('g').attr('id', 'shopper-space')
      .style('fill', 'none').style('stroke', '#fffff0').attr('stroke-width', 5)
      .attr('transform', 'scale(0.68)translate('+(0.36*self.spec.width)+','
        +(0.66*self.spec.height)+')');
    shopperSpace.append('path')
      .attr('d', self.spec.manShopper+' '+self.spec.womanShopper);
    shopperSpace.append('polygon').attr('points', self.spec.manHead);
    shopperSpace.append('polygon').attr('points', self.spec.womanHead);
  }
  updateSurveyScale() {
    let self = this;
    if (self.scaleReady) {
      self.workSpace.select('rect#percentage')
        .transition().duration(self.spec.animTime)
          .attr('y', self.spec.height-self.spec.scaleH(self.surveyInfo.percent))
          .attr('height', self.spec.scaleH(self.surveyInfo.percent));
    }
  }

  spanActive(page) {
    if (this.surveyType==page) return true;
    else return false;
  }
  changeSurveyType(page) {
    let self = this;
    self.surveyType = page;

    if (page==0) self.surveyInfo = {from:'2,800', percent:80, source:'Consumer Reports'};
    else if (page==1) self.surveyInfo = {from:'2,800', percent:36, source:'Consumer Reports'};
    else if (page==2) self.surveyInfo = {from:'30,000', percent:80, source:'Nielsen, Market Research Firm'};
    self.updateSurveyScale();
  }

}

interface Spec {
  animTime, width, height, scaleH,
  manShopper, womanShopper,
  manHead, womanHead
}

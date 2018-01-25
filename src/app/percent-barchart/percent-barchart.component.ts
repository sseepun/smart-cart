import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-percent-barchart',
  templateUrl: './percent-barchart.component.html',
  styleUrls: ['./percent-barchart.component.css']
})
export class PercentBarchartComponent implements OnInit {

  @Input() graphSpec: GraphSpec;
  private spec: Spec; // Internal variables
  private counter = 0;

  @Input() outWidth = 1000;
  @Input() outHeight = 60;
  @Input() marginPercent = 0;
  private margin;
  private width;
  private height;

  private host;
  private svg;
  private workSpace;
  private hoverObj = null;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    let self = this;
    self.host = d3.select(self.element.nativeElement);

    self.margin = {
      left: self.marginPercent*self.outHeight, 
      right: self.marginPercent*self.outHeight,
      top: self.marginPercent*self.outHeight, 
      bottom: self.marginPercent*self.outHeight
    };
    self.width = self.outWidth - self.margin.left - self.margin.right;
    self.height = self.outHeight - self.margin.top - self.margin.bottom;

    self.setupVariables();
    self.initPercentBarChart();
  }

  setupVariables() {
    let self = this;

    // Background
    self.host.select('#percent-barchart')
      .style('background', self.graphSpec.background.color);

    // Setup internal spec
    var dataSum = 0, 
        culmulSum = [];
    self.graphSpec.data.map(d=>{
      culmulSum.push(dataSum);
      dataSum += d.value
    });
    var scaleX = d3.scaleLinear().range([0, self.width]).domain([0, dataSum]),
        barH = self.height;
    
    self.spec = {
      animTime: 500,
      scaleX: scaleX,
      barH: barH,
      sum: dataSum,
      culmulSum: culmulSum
    };

    self.svg = self.host.select('#percent-barchart').select('svg');
    if (self.svg.empty()) {
      self.svg = self.host.select('#percent-barchart').append('svg')
        .attr('width', '100%').attr('opacity', 1)
        .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
        .attr('viewBox', '0 0 '+self.outWidth+' '+self.outHeight);
      self.workSpace = self.svg.append('g').attr('id', 'work-space')
        .attr('transform', 'translate('+self.margin.left+','+self.margin.top+')');
    } else {
      self.workSpace = self.svg.select('g#work-space');
    }
  }

  initPercentBarChart() {
    let self = this;

    var bars = self.workSpace.selectAll('g.bar').data(self.graphSpec.data).enter().append('g')
      .attr('class', 'bar').attr('opacity', 1)
      .attr('id', (d,i)=>{return 'bar'+i})
      .attr('transform', (d,i)=>{
        var xPos = self.spec.scaleX(self.spec.culmulSum[i]);
        return 'translate('+xPos+',0)';
      });
    bars.append('rect')
      .attr('width', 0).attr('height', self.spec.barH)
      .style('fill', d=>{return d.color});
    bars.append('text').attr('class', 'label')
      .attr('text-anchor', 'middle')
      .attr('y', self.spec.barH*0.75)
      .attr('x', d=>{return self.spec.scaleX(d.value)/2})
      .style('font-size', 0.6*self.height).style('fill', '#fffff0')
      .attr('opacity', 0).attr('pointer-events', 'none')
      .text(d=>{return Math.round(d.value/self.spec.sum*100)+'%'});
    
    d3.timeout(()=>{self.initAnimate()}, 1000)
  }
  initAnimate() {
    let self = this;
    if (self.counter < self.graphSpec.data.length) {
      if (self.graphSpec.data[self.counter].value==0) {
        self.counter++;
        self.initAnimate();
      } else {
        var bar = self.workSpace.select('g#bar'+self.counter);
        bar.select('rect').transition().duration(self.spec.animTime)
          .attr('width', d=>{return self.spec.scaleX(d.value)});
        bar.select('text.label').transition().duration(self.spec.animTime)
          .attr('opacity', 1);

        self.counter++;
        d3.timeout(()=>{self.initAnimate()}, self.spec.animTime*1.3);
      }
    }
  }

}

interface GraphSpec {
  data, // array of { desc, value, color }
  background // { color }
}

interface Spec {
  animTime,
  scaleX,
  barH,
  sum,
  culmulSum
}

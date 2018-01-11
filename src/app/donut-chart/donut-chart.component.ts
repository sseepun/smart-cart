import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input() percentage;
  @Input() donutColor;
  @Input() outWidth = 600;
  @Input() innerPercentR = 0.7;
  @Input() tip = null;

  private initDone = false;
  private svg;
  private width;
  private workSpace;
  private margin;
  private arc;
  private hoverArc;
  private spec: Spec;
  
  constructor(private element: ElementRef) { }
  

  ngOnInit() {
    let self = this;
    self.setVariables();
    if (self.svg.empty()) self.initDonutChart();
    else {
      self.workSpace = self.svg.select('g#work-space');
      self.updateDonutChart();
    }
  }

  ngOnChanges() {
    let self = this;
    // console.log('Donut chart -- on changes');

    if (self.initDone) {
      self.setVariables();
      self.updateDonutChart();
    }
  }

  initDonutChart() {
    let self = this;
    var tau = 2*Math.PI;
    var data = [self.percentage];
    
    self.svg = d3.select(self.element.nativeElement).select('#donut-chart')
                  .append('svg')
                    .attr('width', '100%').attr('opacity', 1)
                    .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                    // .attr('height', '330px').attr('preserveAspectRatio', 'none')
                    .attr('viewBox', '0 0 '+self.outWidth+' '+self.outWidth);
    self.workSpace = self.svg.append('g')
      .attr('id', 'work-space')
      .attr('transform', 'translate('+(self.outWidth/2)+','+(self.outWidth/2)+')');

    // Draw donuts
    self.workSpace.append('path').datum({endAngle: 0*tau})
      .attr('d', self.arc).style('fill', self.donutColor)
      .attr('opacity', 0.8)
      .on('touchstart', function(d) {
        d3.event.preventDefault();
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.hoverArc)
          .style('fill', '#a966d8');
        d3.select('#donut-tooltip').style('display', 'block');
        self.tooltipPositionUpdate();
      })
      .on('touchmove', function() {
        d3.event.preventDefault();
        self.tooltipPositionUpdate();
      })
      .on('touchend', function() {
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.arc)
          .style('fill', self.donutColor);
        d3.select('#donut-tooltip').style('display', 'none');
      })
      .on('mouseenter', function(d) {
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.hoverArc)
          .style('fill', '#a966d8');
        d3.select('#donut-tooltip').style('display', 'block');
        self.tooltipPositionUpdate();
      })
      .on('mousemove', self.tooltipPositionUpdate)
      .on('mouseout', function() {
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.arc)
          .style('fill', self.donutColor);
        d3.select('#donut-tooltip').style('display', 'none');
      })
      .transition().duration(self.spec.animTime)
        .attrTween('d', self.arcTween(self.percentage*tau));
    self.workSpace.append('text')
      .attr('id', 'donut-number').attr('x', 0).attr('y', 50)
      .attr('text-anchor', 'middle').attr('font-weight', 'bold')
      .attr('font-size', 130).style('fill', '#bebebe')
      .text((Math.round(this.percentage*100)).toString()+'%');

    // Initialize done
    self.initDone = true;
  }

  updateDonutChart() {
    let self = this;
    var tau = 2*Math.PI;

    // Upadte donuts
    self.workSpace.select('path')
      .on('touchstart', function(d) {
        d3.event.preventDefault();
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.hoverArc)
          .style('fill', '#a966d8');
        d3.select('#donut-tooltip').style('display', 'block');
        self.tooltipPositionUpdate();
      })
      .on('touchmove', function() {
        d3.event.preventDefault();
        self.tooltipPositionUpdate();
      })
      .on('touchend', function() {
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.arc)
          .style('fill', self.donutColor);
        d3.select('#donut-tooltip').style('display', 'none');
      })
      .on('mouseenter', function(d) {
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.hoverArc)
          .style('fill', '#a966d8');
        d3.select('#donut-tooltip').style('display', 'block');
      })
      .on('mousemove', self.tooltipPositionUpdate)
      .on('mouseout', function() {
        d3.select(this).transition().duration(self.spec.animTime/4)
          .attr('d', self.arc)
          .style('fill', self.donutColor);
        d3.select('#donut-tooltip').style('display', 'none');
      })
      .transition().duration(self.spec.animTime)
        .attrTween('d', self.arcTween(self.percentage*tau));

    // Uppdate middle text
    self.workSpace.select('text#donut-number')
      .text((Math.round(this.percentage*100)).toString()+'%');
  }

  setVariables() {
    let self = this;
    self.margin = {left: 0.05*self.outWidth, right: 0.05*self.outWidth,
                    top: 0.05*self.outWidth, bottom: 0.05*self.outWidth};
    self.width = self.outWidth - self.margin.left - self.margin.right;

    self.arc = d3.arc().startAngle(0)
                  .innerRadius(self.width*self.innerPercentR/2)
                  .outerRadius(self.width/2);
    self.hoverArc = d3.arc().startAngle(0)
                      .innerRadius(self.width*self.innerPercentR*1.1/2)
                      .outerRadius(self.outWidth/2);

    // Setup graph spec
    self.spec = {animTime:1000};

    self.svg = d3.select(self.element.nativeElement).select('#donut-chart').select('svg');
    if (!self.svg.empty()) self.workSpace = self.svg.select('g#work-space');
  }

  arcTween(newAngle) {
    let self = this;
    return function(d) {
      var interpolate = d3.interpolate(d.endAngle, newAngle);
      return function(t) {
        d.endAngle = interpolate(t);
        return self.arc(d);
      };
    };
  }
  arcHoverTween(newAngle) {
    let self = this;
    return function(d) {
      var interpolate = d3.interpolate(d.endAngle, newAngle);
      return function(t) {
        d.endAngle = interpolate(t);
        return self.hoverArc(d);
      };
    };
  }

  tooltipPositionUpdate() {
    var coordinates = d3.mouse(d3.select('#donut-chart').node());
    coordinates[0] += 30; coordinates[1] -= 12;
    if (coordinates[0]>220) coordinates[0] -= 175;
    d3.select('#donut-tooltip')
      .style('left', coordinates[0]+'px').style('top', coordinates[1]+'px');
  }

}

interface Spec {
  animTime
}

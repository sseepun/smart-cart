import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-plot-histogram',
  templateUrl: './plot-histogram.component.html',
  styleUrls: ['./plot-histogram.component.css']
})
export class PlotHistogramComponent implements OnInit {

  @Input() histData = null; // {desc:'description', value:number}
  @Input() title = null;
  @Input() xlab = null;
  @Input() ylab = null;

  @Input() tooltipX = 70;
  @Input() tooltipY = 45;
  @Input() showH = 330;

  @Input() outWidth = 1200;
  @Input() outHeight = 700;
  @Input() marginPer = {left:0.1, right:0.1, top:0.1, bottom:0.21};

  private initDone = false;
  private svg;
  private margin;
  private width;
  private height;
  private workSpace;
  private scaleH;
  private spec: Spec;
  private hoverObj = null;

  constructor(private element: ElementRef) { }


  ngOnInit() {
    let self = this;
    if (self.histData !== null) {
      self.setVariables();
      if (self.svg.empty()) self.initHistPlot();
      else {
        self.workSpace = self.svg.select('g#work-space');
        self.updateHistPlot();
      }
    }
  }

  ngOnChanges() {
    let self = this;
    // console.log('Histogram -- on changes');

    if (self.initDone) {
      self.setVariables();
      self.updateHistPlot();
    }
  }

  setVariables() {
    let self = this;
    self.margin = {left: self.marginPer.left*self.outWidth, 
                    right: self.marginPer.right*self.outWidth,
                    top: self.marginPer.top*self.outHeight, 
                    bottom: self.marginPer.bottom*self.outHeight};
    self.width = self.outWidth - self.margin.left - self.margin.right;
    self.height = self.outHeight - self.margin.top - self.margin.bottom;

    self.scaleH = d3.scaleLinear().range([0, self.height])
                    .domain([0, d3.max(self.histData, d=>{return d.value})]);

    // Setup graph spec
    var labeLength = d3.max(self.histData, d=>{return d.desc.toString().length}); 
    var fullW = self.width/self.histData.length,
        padW = fullW*0.1, oneW = fullW - 2*padW, animTime = 500;
    self.spec = {fullW:fullW, padW:padW, oneW:oneW, animTime:animTime, 
                  xLabEvery:Math.ceil(self.histData.length/12),
                  xLabRotate:labeLength>3};

    self.svg = d3.select(self.element.nativeElement).select('#histogram-graph').select('svg');
    if (!self.svg.empty()) self.workSpace = self.svg.select('g#work-space');
  }

  initHistPlot() {
    let self = this;
    self.svg = d3.select(self.element.nativeElement).select('#histogram-graph')
                  .append('svg')
                    .attr('width', '100%').attr('opacity', 1)
                    // .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                    .attr('height', self.showH+'px').attr('preserveAspectRatio', 'none')
                    .attr('viewBox', '0 0 '+self.outWidth+' '+self.outHeight);
    // Clip-path
    // self.svg.append('defs').append('clipPath')
    //   .attr('id', 'work-space-clip')
    //   .append('rect').attr('width', self.width).attr('height', self.height).style('fill', 'none');

    // Work space
    self.workSpace = self.svg.append('g')
              .attr('id', 'work-space')
              .attr('clip-path', 'url(#work-space-clip)')
              .attr('transform', 'translate('+self.margin.left+','+self.margin.top+')');

    var histSpaces = self.workSpace.selectAll('g.hist-bar').data(self.histData).enter().append('g')
                        .attr('class', 'hist-bar').attr('opacity', 1)
                        .attr('transform', function(d,i) {
                          var xPos = self.spec.fullW*i;
                          return 'translate('+xPos+','+self.height+')';
                        });
    histSpaces.append('rect')
      .attr('x', self.spec.padW)
      .attr('width', self.spec.oneW).attr('height', 0)
      .style('fill', '#F39C12').attr('opacity', 0.85)
      .on('touchstart', function(d) {
        d3.event.preventDefault();
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#a966d8').attr('width', self.spec.fullW)
          .attr('x', 0);
        self.hoverObj = d;
        d3.select('#histogram-tooltip').style('display', 'block');
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('touchmove', function() {
        d3.event.preventDefault();
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('touchend', function() {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#F39C12').attr('width', self.spec.oneW)
          .attr('x', self.spec.padW);
        self.hoverObj = null;
        d3.select('#histogram-tooltip').style('display', 'none');
      })
      .on('mouseenter', function(d) {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#a966d8').attr('width', self.spec.fullW)
          .attr('x', 0);
        self.hoverObj = d;
        d3.select('#histogram-tooltip').style('display', 'block');
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('mousemove', function() {
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('mouseout', function() {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#F39C12').attr('width', self.spec.oneW)
          .attr('x', self.spec.padW);
        self.hoverObj = null;
        d3.select('#histogram-tooltip').style('display', 'none');
      })
      .transition().duration(self.spec.animTime)
        .attr('y', d=>{return -self.scaleH(d.value)})
        .attr('height', d=>{return self.scaleH(d.value)});
    histSpaces.append('text')
      .attr('text-anchor', function() {
        if (self.spec.xLabRotate) return 'end'; else return 'middle';
      })
      .attr('transform', function() {
        if (self.spec.xLabRotate) return 'translate('+(self.spec.fullW/2)+',28)rotate(-60)';
        else return 'translate('+(self.spec.fullW/2)+',42)';
      })
      .attr('font-size', 28).style('fill', '#cecece').attr('opacity', 0)
      .text(d=>{return d.desc})
      .transition().duration(self.spec.animTime)
        .attr('opacity', function(d,i) {
          if (i%self.spec.xLabEvery==0) return 1;
          else return 0;
        });

    // Y axis
    var yScale = d3.scaleLinear().range([self.height, 0])
                    .domain([0, d3.max(self.histData, d=>{return d.value})]);
    let yAxis = d3.axisLeft(yScale).ticks(5).tickFormat(function(d) { return d; });  
    var yAxisSpace = self.svg.insert('g', ':first-child')
                          .attr('id', 'y-axis')
                          .attr('transform', 'translate('+(self.margin.left)+','+(self.margin.top)+')')
                          .call(customYAxis);
    yAxisSpace.append('text')
      .attr('id', 'label').attr('text-anchor', 'start')
      .attr('x', -self.margin.left).attr('y', -0.5*self.margin.top)
      .attr('font-size', 32).style('fill', '#949ba2')
      .text(self.ylab);
    function customYAxis(g) {
      g.call(yAxis);
      g.select('.domain').attr('stroke-width', 3).style('stroke', '#949ba2');
      g.selectAll('.tick text')
        .attr('x', -0.15*self.margin.left)
        .attr('font-size', 28).style('fill', '#cecece');
      g.selectAll('.tick line')
        .style('stroke', '#949ba2').attr('stroke-width', 1)
        .attr('x1', 0).attr('x2', self.width);
    };

    // X axis
    var xAxisSpace = self.svg.append('g')
          .attr('id', 'x-axis')
          .attr('transform', 'translate('+(self.margin.left)+','+(self.margin.top+self.height)+')')
    xAxisSpace.append('text')
      .attr('id', 'label').attr('text-anchor', 'end')
      .attr('x', self.width+self.margin.left).attr('y', 8)
      .attr('font-size', 32).style('fill', '#999999')
      .text(self.xlab);
    xAxisSpace.append('line')
      .attr('x1', 0).attr('x2', self.width)
      .attr('stroke-width', 3).style('stroke', '#949ba2');
      
    // Finished flag
    self.initDone = true;
  }

  updateHistPlot() {
    let self = this;
    var histSpaces = self.workSpace.selectAll('g.hist-bar').data(self.histData);
    // Remove
    histSpaces.exit().remove();
    // Existing
    histSpaces.transition().duration(self.spec.animTime)
      .attr('transform', function(d,i) {
        var xPos = self.spec.fullW*i;
        return 'translate('+xPos+','+self.height+')';
      });
    histSpaces.select('rect')
      .on('touchstart', function(d) {
        d3.event.preventDefault();
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#a966d8').attr('width', self.spec.fullW)
          .attr('x', 0);
        self.hoverObj = d;
        d3.select('#histogram-tooltip').style('display', 'block');
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('touchmove', function() {
        d3.event.preventDefault();
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('touchend', function() {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#F39C12').attr('width', self.spec.oneW)
          .attr('x', self.spec.padW);
        self.hoverObj = null;
        d3.select('#histogram-tooltip').style('display', 'none');
      })
      .on('mouseenter', function(d) {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#a966d8').attr('width', self.spec.fullW)
          .attr('x', 0);
        self.hoverObj = d;
        d3.select('#histogram-tooltip').style('display', 'block');
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('mousemove', function() {
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('mouseout', function() {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#F39C12').attr('width', self.spec.oneW)
          .attr('x', self.spec.padW);
        self.hoverObj = null;
        d3.select('#histogram-tooltip').style('display', 'none');
      })
      .transition().duration(self.spec.animTime)
        .attr('x', self.spec.padW).attr('width', self.spec.oneW)
        .attr('y', d=>{return -self.scaleH(d.value)})
        .attr('height', d=>{return self.scaleH(d.value)});
    histSpaces.select('text')
      .attr('text-anchor', function() {
        if (self.spec.xLabRotate) return 'end'; else return 'middle';
      })
      .text(d=>{return d.desc})
      .transition().duration(self.spec.animTime)
        .attr('transform', function() {
          if (self.spec.xLabRotate) return 'translate('+(self.spec.fullW/2)+',28)rotate(-60)';
          else return 'translate('+(self.spec.fullW/2)+',42)';
        })
        .attr('opacity', function(d,i) {
          if (i%self.spec.xLabEvery==0) return 1;
          else return 0;
        });
    // Enter
    var newHistSpaces = histSpaces.enter().append('g')
                            .attr('class', 'hist-bar').attr('opacity', 1)
                            .attr('transform', function(d,i) {
                              var xPos = self.spec.fullW*i;
                              return 'translate('+xPos+','+self.height+')';
                            });
    newHistSpaces.append('rect')
      .attr('x', self.spec.padW)
      .attr('width', self.spec.oneW).attr('height', 0)
      .style('fill', '#F39C12').attr('opacity', 0.85)
      .on('touchstart', function(d) {
        d3.event.preventDefault();
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#a966d8').attr('width', self.spec.fullW)
          .attr('x', 0);
        self.hoverObj = d;
        d3.select('#histogram-tooltip').style('display', 'block');
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('touchmove', function() {
        d3.event.preventDefault();
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('touchend', function() {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#F39C12').attr('width', self.spec.oneW)
          .attr('x', self.spec.padW);
        self.hoverObj = null;
        d3.select('#histogram-tooltip').style('display', 'none');
      })
      .on('mouseenter', function(d) {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#a966d8').attr('width', self.spec.fullW)
          .attr('x', 0);
        self.hoverObj = d;
        d3.select('#histogram-tooltip').style('display', 'block');
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('mousemove', function() {
        self.tooltipPositionUpdate(self.tooltipX, self.tooltipY);
      })
      .on('mouseout', function() {
        d3.select(this).transition().duration(self.spec.animTime/2)
          .style('fill', '#F39C12').attr('width', self.spec.oneW)
          .attr('x', self.spec.padW);
        self.hoverObj = null;
        d3.select('#histogram-tooltip').style('display', 'none');
      })
      .transition().duration(self.spec.animTime)
        .attr('y', d=>{return -self.scaleH(d.value)})
        .attr('height', d=>{return self.scaleH(d.value)});
    newHistSpaces.append('text')
      .attr('text-anchor', function() {
        if (self.spec.xLabRotate) return 'end'; else return 'middle';
      })
      .attr('transform', function() {
        if (self.spec.xLabRotate) return 'translate('+(self.spec.fullW/2)+',28)rotate(-60)';
        else return 'translate('+(self.spec.fullW/2)+',42)';
      })
      .attr('font-size', 28).style('fill', '#cecece').attr('opacity', 0)
      .text(d=>{return d.desc})
      .transition().duration(self.spec.animTime)
        .attr('opacity', function(d,i) {
          if (i%self.spec.xLabEvery==0) return 1;
          else return 0;
        });

    // Y axis update
    var yScale = d3.scaleLinear().range([self.height, 0])
                    .domain([0, d3.max(self.histData, d=>{return d.value})]);
    let yAxis = d3.axisLeft(yScale).ticks(5).tickFormat(function(d) { return d; });  
    var yAxisSpace = self.svg.select('g#y-axis')
                        .transition().duration(self.spec.animTime).call(customYAxis);
    yAxisSpace.select('text#label').text(self.ylab);
    function customYAxis(g) {
      g.call(yAxis);
      g.select('.domain').attr('stroke-width', 3).style('stroke', '#949ba2');
      g.selectAll('.tick text')
        .attr('x', -0.15*self.margin.left)
        .attr('font-size', 28).style('fill', '#cecece');
      g.selectAll('.tick line')
        .style('stroke', '#949ba2').attr('stroke-width', 1)
        .attr('x1', 0).attr('x2', self.width);
    };
  }

  tooltipPositionUpdate(xOff, yOff) {
    var coordinates = d3.mouse(d3.select('#histogram-graph').node());
    coordinates[0] += xOff; coordinates[1] += yOff;
    if (coordinates[0]>360) coordinates[0] -= 235;
    d3.select('#histogram-tooltip')
      .style('left', coordinates[0]+'px').style('top', coordinates[1]+'px');
  }

}

interface Spec {
  fullW, padW, oneW, animTime, xLabEvery, xLabRotate;
}

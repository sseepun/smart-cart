import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  @Input() graphSpec: GraphSpec;
  private spec: Spec; // Internal variables

  @Input() trademarkColor;

  @Input() outWidth = 1000;
  @Input() outHeight = 430;
  @Input() showH = 460;
  @Input() marginPercent = {left:0.1, right:0.01, top:0.08, bottom:0.1};
  private margin;
  private width;
  private height;

  private host;
  private svg;
  private workSpace;
  private linePath;
  private hoverObj = null;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    let self = this;
    self.host = d3.select(self.element.nativeElement);

    // Trade mark
    if (self.trademarkColor !== undefined) {
      self.host.select('#barchart-trademark').style('color', self.trademarkColor);
    }

    self.margin = {left: self.marginPercent.left*self.outWidth, 
                    right: self.marginPercent.right*self.outWidth,
                    top: self.marginPercent.top*self.outHeight, 
                    bottom: self.marginPercent.bottom*self.outHeight};
    self.width = self.outWidth - self.margin.left - self.margin.right;
    self.height = self.outHeight - self.margin.top - self.margin.bottom;

    self.setupVariables();
    self.initBarchart();
  }

  setupVariables() {
    let self = this;

    // Background
    self.host.select('#barchart').style('background', self.graphSpec.background.color);
    // Title style
    self.host.select('#barchart').select('#barchart-title')
      .style('color', self.graphSpec.title.colorText);

    // Setup internal spec
    var labeLength = d3.max(self.graphSpec.data, d=>{return d.desc.toString().length});
    var valueArray = self.graphSpec.data.map(d=>{return d.value}),
        min = d3.min([0, d3.min(valueArray)]),
        max = d3.max([0, d3.max(valueArray)]) * 1.15,
        scaleH = d3.scaleLinear().range([0, self.height]).domain([min, max]),
        scaleY = d3.scaleLinear().range([self.height, 0]).domain([min, max]);
    var slotW = self.width/self.graphSpec.data.length,
        barW = slotW*self.graphSpec.barStyle.width,
        hoverW = slotW*self.graphSpec.hoverStyle.width;
    
    self.spec = {
      animTime: 1000,
      scaleH: scaleH,
      scaleY: scaleY,
      slotW: slotW, barW: barW, hoverW: hoverW,
      xLabEvery: Math.ceil(self.graphSpec.data.length/12),
      xLabRotate:labeLength > 3
    };

    self.svg = self.host.select('#barchart').select('#barchart-space').select('svg');
    if (self.svg.empty()) {
      self.svg = self.host.select('#barchart').select('#barchart-space')
        .append('svg')
          .attr('width', '100%').attr('opacity', 1)
          .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
          // .attr('height', self.showH+'px').attr('preserveAspectRatio', 'none')
          .attr('viewBox', '0 0 '+self.outWidth+' '+self.outHeight);
      self.workSpace = self.svg.append('g').attr('id', 'work-space')
        // .attr('clip-path', 'url(#work-space-clip)')
        .attr('transform', 'translate('+self.margin.left+','+self.margin.top+')');
      // Clip-path
      // self.svg.append('defs').append('clipPath')
      //   .attr('id', 'work-space-clip')
      //   .append('rect').attr('width', self.width).attr('height', self.height).style('fill', 'none');
    } else {
      self.workSpace = self.svg.select('g#work-space');
    }
  }

  // Initialize
  initBarchart() {
    let self = this;

    var bars = self.workSpace.selectAll('g.bar').data(self.graphSpec.data).enter().append('g')
      .attr('class', 'bar').attr('opacity', 1)
      .attr('transform', function(d,i) {
        var xPos = self.spec.slotW*i;
        return 'translate('+xPos+','+self.height+')';
      });
    bars.append('text').attr('id', 'label')
      .attr('text-anchor', function() {
        if (self.spec.xLabRotate) return 'end'; else return 'middle';
      })
      .attr('transform', function() {
        if (self.spec.xLabRotate) return 'translate('+(self.spec.slotW/2)+',16)rotate(-45)';
        else return 'translate('+(self.spec.slotW/2)+',20)';
      })
      .attr('font-size', 14).style('fill', self.graphSpec.xAxis.axisColor)
      .attr('opacity', 0)
      .text(d=>{return d.desc})
      .transition().duration(self.spec.animTime)
        .attr('opacity', function(d,i) {
          // if (i%self.spec.xLabEvery==0) return 1;
          // else return 0;
          return 1;
        });
    bars.append('rect')
      .attr('x', (self.spec.slotW - self.spec.barW)/2)
      .attr('width', self.spec.barW).attr('height', 0)
      .style('fill', self.graphSpec.barStyle.colorText)
      .attr('opacity', self.graphSpec.barStyle.opacity)
      .on('touchstart', (d,i)=>{
        d3.event.preventDefault();
        self.mouseenter(d,i);
      })
      .on('touchmove', ()=>{
        d3.event.preventDefault();
        self.mousemove();
      })
      .on('touchend', ()=>{self.mouseout()})
      .on('mouseenter', (d,i)=>{self.mouseenter(d,i)})
      .on('mousemove', ()=>{self.mousemove()})
      .on('mouseout', ()=>{self.mouseout()})
      .transition().duration(self.spec.animTime)
        .attr('y', d=>{return -self.spec.scaleH(d.value)})
        .attr('height', d=>{return self.spec.scaleH(d.value)});

    // Special for the talk
    bars.append('text').attr('id', 'value')
      .attr('x', (self.spec.slotW + self.spec.barW)/2)
      .attr('text-anchor', 'end')
      .attr('font-size', 28).style('fill', '#fffff0')
      .attr('y', -0.02*self.height)
      .text(d=>{return '$'+Math.round(d.value)+' billion'})
      .attr('opacity', (d,i)=>{
        if ((i+1)%5==0) return 1;
        else return 0;
      })
      .transition().duration(self.spec.animTime)
        .attr('y', d=>{return -self.spec.scaleH(d.value)-0.02*self.height});
    self.linePath = self.workSpace.append('path').attr('id', 'line-path');
    ///////////// 

    // Y axis
    let yAxis = d3.axisLeft(self.spec.scaleY).ticks(5).tickFormat(d=>{return d});  
    var yAxisSpace = self.svg.insert('g', ':first-child').attr('id', 'y-axis')
      .attr('transform', 'translate('+(self.margin.left)+','+(self.margin.top)+')')
      .call(customYAxis);
    yAxisSpace.append('text').attr('id', 'label')
      .attr('text-anchor', 'middle')
      .attr('font-size', 18).style('fill', self.graphSpec.yAxis.colorText)
      .attr('transform', 'translate('+(-self.margin.left+18)+','+(self.height/2)+')rotate(-90)')
      .text(self.graphSpec.yAxis.label);
    function customYAxis(g) {
      g.call(yAxis);
      g.select('.domain').attr('stroke-width', 2)
        .style('stroke', self.graphSpec.yAxis.axisColor);
      g.selectAll('.tick text')
        .attr('x', -18).attr('font-size', 14)
        .style('fill', self.graphSpec.yAxis.axisColor);
      g.selectAll('.tick line')
        .style('stroke', self.graphSpec.yAxis.axisColor).attr('stroke-width', 1.2)
        .attr('x1', 0).attr('x2', self.width).attr('opacity', 0.5);
    };

    // X axis
    var xAxisSpace = self.svg.append('g').attr('id', 'x-axis')
      .attr('transform', 'translate('+(self.margin.left)+','+(self.margin.top+self.height)+')')
    xAxisSpace.append('text').attr('id', 'label')
      .attr('text-anchor', 'middle')
      .attr('x', self.width/2).attr('y', self.margin.bottom)
      .attr('font-size', 18).style('fill', self.graphSpec.xAxis.colorText)
      .text(self.graphSpec.xAxis.label);
    xAxisSpace.append('line')
      .attr('x1', 0).attr('x2', self.width)
      .attr('stroke-width', 2).style('stroke', self.graphSpec.xAxis.axisColor);
  }

  // Full update

  // Update functions
  updateBarchartData() {
    let self = this;
    self.setupVariables();

    var bars = self.workSpace.selectAll('g.bar').data(self.graphSpec.data);
    // Remove
    bars.exit().transition().duration(self.spec.animTime).attr('opacity', 0)
      .on('end', ()=>{d3.select(this).remove()});
    // Update
    bars.transition().duration(self.spec.animTime)
      .attr('transform', (d,i)=>{
        var xPos = self.spec.slotW*i;
        return 'translate('+xPos+','+self.height+')';
      });
    bars.select('text#label')
      .attr('text-anchor', ()=>{
        if (self.spec.xLabRotate) return 'end'; else return 'middle';
      })
      .attr('transform', ()=>{
        if (self.spec.xLabRotate) return 'translate('+(self.spec.slotW/2)+',16)rotate(-45)';
        else return 'translate('+(self.spec.slotW/2)+',20)';
      })
      .attr('opacity', (d,i)=>{
        // if (i%self.spec.xLabEvery==0) return 1;
        // else return 0;
        return 1;
      })
      .attr('font-size', 14).style('fill', self.graphSpec.xAxis.axisColor)
      .text(d=>{return d.desc});
    bars.select('rect').transition().duration(self.spec.animTime)
      .attr('x', (self.spec.slotW - self.spec.barW)/2)
      .attr('width', self.spec.barW)
      .attr('y', d=>{return -self.spec.scaleH(d.value)})
      .attr('height', d=>{return self.spec.scaleH(d.value)});
    // Enter
    var newBars = bars.enter().append('g')
      .attr('class', 'bar').attr('opacity', 1)
      .attr('transform', (d,i)=>{
        var xPos = self.spec.slotW*i;
        return 'translate('+xPos+','+self.height+')';
      });
    newBars.append('text').attr('id', 'label')
      .attr('text-anchor', function() {
        if (self.spec.xLabRotate) return 'end'; else return 'middle';
      })
      .attr('transform', function() {
        if (self.spec.xLabRotate) return 'translate('+(self.spec.slotW/2)+',16)rotate(-45)';
        else return 'translate('+(self.spec.slotW/2)+',20)';
      })
      .attr('font-size', 14).style('fill', self.graphSpec.xAxis.axisColor)
      .attr('opacity', 0)
      .text(d=>{return d.desc})
      .transition().duration(self.spec.animTime)
        .attr('opacity', function(d,i) {
          // if (i%self.spec.xLabEvery==0) return 1;
          // else return 0;
          return 1;
        });
    newBars.append('rect')
      .attr('x', (self.spec.slotW - self.spec.barW)/2)
      .attr('width', self.spec.barW).attr('height', 0)
      .style('fill', self.graphSpec.barStyle.colorText)
      .attr('opacity', self.graphSpec.barStyle.opacity)
      .on('touchstart', (d,i)=>{
        d3.event.preventDefault();
        self.mouseenter(d,i);
      })
      .on('touchmove', ()=>{
        d3.event.preventDefault();
        self.mousemove();
      })
      .on('touchend', ()=>{self.mouseout()})
      .on('mouseenter', (d,i)=>{self.mouseenter(d,i)})
      .on('mousemove', ()=>{self.mousemove()})
      .on('mouseout', ()=>{self.mouseout()})
      .transition().duration(self.spec.animTime)
        .attr('y', d=>{return -self.spec.scaleH(d.value)})
        .attr('height', d=>{return self.spec.scaleH(d.value)});

    // Y axis
    let yAxis = d3.axisLeft(self.spec.scaleY).ticks(5).tickFormat(d=>{return d});  
    self.svg.select('g#y-axis').transition().duration(self.spec.animTime)
      .call(customYAxis);
    function customYAxis(g) {
      g.call(yAxis);
      g.select('.domain').attr('stroke-width', 2)
        .style('stroke', self.graphSpec.yAxis.axisColor);
      g.selectAll('.tick text')
        .attr('x', -18).attr('font-size', 14)
        .style('fill', self.graphSpec.yAxis.axisColor);
      g.selectAll('.tick line')
        .style('stroke', self.graphSpec.yAxis.axisColor).attr('stroke-width', 1.2)
        .attr('x1', 0).attr('x2', self.width).attr('opacity', 0.5);
    };
  }
  updateBarStyle() {
    let self = this;
    var slotW = self.width/self.graphSpec.data.length,
        barW = slotW*self.graphSpec.barStyle.width;
    self.spec.slotW = slotW;
    self.spec.barW = barW;

    self.workSpace.selectAll('g.bar').select('rect')
      .attr('x', (self.spec.slotW - self.spec.barW)/2)
      .attr('width', self.spec.barW)
      .style('fill', self.graphSpec.barStyle.colorText)
      .attr('opacity', self.graphSpec.barStyle.opacity);
  }
  updateHoverStyle() {
    let self = this;
    var slotW = self.width/self.graphSpec.data.length,
        hoverW = slotW*self.graphSpec.hoverStyle.width;
    self.spec.hoverW = hoverW;
  }
  updateXaxis() {
    let self = this;
    self.svg.select('g#x-axis').select('text#label')
      .style('fill', self.graphSpec.xAxis.colorText)
      .text(self.graphSpec.xAxis.label);
  }
  updateYaxis() {
    let self = this;
    self.svg.select('g#y-axis').select('text#label')
      .style('fill', self.graphSpec.yAxis.colorText)
      .text(self.graphSpec.yAxis.label);
  }
  updateTitle() {
    let self = this;
    d3.select(self.element.nativeElement).select('#barchart').select('#barchart-title')
      .style('color', self.graphSpec.title.colorText);
  }

  mouseenter(d, i) {
    let self = this;
    self.workSpace.selectAll('g.bar').select('rect').transition().duration(self.spec.animTime/4)
      .attr('opacity', (data,index)=>{
        if (d.desc==data.desc && i==index) return self.graphSpec.barStyle.opacity;
        else if (self.graphSpec.hoverStyle.type==2) return self.graphSpec.barStyle.opacity/4;
        else return self.graphSpec.barStyle.opacity;
      })
      .attr('x', (data,index)=>{
        if (d.desc==data.desc && i==index) return (self.spec.slotW - self.spec.hoverW)/2;
        else return (self.spec.slotW - self.spec.barW)/2;
      })
      .attr('width', (data,index)=>{
        if (d.desc==data.desc && i==index) return self.spec.hoverW;
        else return self.spec.barW;
      })
      .style('fill', (data,index)=>{
        if (d.desc==data.desc && i==index) return self.graphSpec.hoverStyle.colorText;
        else return self.graphSpec.barStyle.colorText;
      })
      .attr('y', data=>{return -self.spec.scaleH(data.value)})
      .attr('height', data=>{return self.spec.scaleH(data.value)});
    self.hoverObj = d;

    self.host.select('#barchart-tooltip').style('display', 'block');
    self.tooltipPositionUpdate();
  }
  mousemove() {
    let self = this;
    self.tooltipPositionUpdate();
  }
  mouseout() {
    let self = this;
    self.workSpace.selectAll('g.bar').select('rect').transition().duration(self.spec.animTime/4)
      .attr('opacity', self.graphSpec.barStyle.opacity)
      .attr('x', (self.spec.slotW - self.spec.barW)/2)
      .attr('width', self.spec.barW)
      .style('fill', self.graphSpec.barStyle.colorText)
      .attr('y', data=>{return -self.spec.scaleH(data.value)})
      .attr('height', data=>{return self.spec.scaleH(data.value)});
    self.hoverObj = null;
    self.host.select('#barchart-tooltip').style('display', 'none');
  }

  tooltipPositionUpdate() {
    let self = this;

    var element = d3.select('body').node(),
        coordinates = d3.mouse(element),
        bbox = element.getBoundingClientRect();

    var x = coordinates[0] + 35*bbox.width/1686,
        y = coordinates[1] - 20;

    if (coordinates[0]>bbox.width*0.8) {
      var tbbox = self.host.select('#barchart-tooltip').node().getBoundingClientRect();
      x -= tbbox.width + 70*bbox.width/1686;
    }
    self.host.select('#barchart-tooltip')
      .style('left', x+'px').style('top', y+'px');
  }

  // Update by clicker
  chooseDesc(desc) {
    let self = this;
    self.workSpace.selectAll('g.bar').select('rect').transition().duration(self.spec.animTime/3)
      .attr('opacity', (data,index)=>{
        if (desc==data.desc) return self.graphSpec.barStyle.opacity;
        else if (self.graphSpec.hoverStyle.type==2) return self.graphSpec.barStyle.opacity/4;
        else return self.graphSpec.barStyle.opacity;
      })
      .attr('x', (data,index)=>{
        if (desc==data.desc) return (self.spec.slotW - self.spec.hoverW)/2;
        else return (self.spec.slotW - self.spec.barW)/2;
      })
      .attr('width', (data,index)=>{
        if (desc==data.desc) return self.spec.hoverW;
        else return self.spec.barW;
      })
      .style('fill', (data,index)=>{
        if (desc==data.desc) return self.graphSpec.hoverStyle.colorText;
        else return self.graphSpec.barStyle.colorText;
      })
      .attr('y', data=>{return -self.spec.scaleH(data.value)})
      .attr('height', data=>{return self.spec.scaleH(data.value)});
    self.linePath.transition().duration(self.spec.animTime/3).attr('opacity', 0);
  }
  initStage() {
    let self = this;
    self.workSpace.selectAll('g.bar').select('rect').transition().duration(self.spec.animTime/3)
      .attr('opacity', (data,index)=>{return self.graphSpec.barStyle.opacity})
      .attr('x', (data,index)=>{return (self.spec.slotW - self.spec.barW)/2})
      .attr('width', (data,index)=>{return self.spec.barW})
      .style('fill', (data,index)=>{return self.graphSpec.barStyle.colorText})
      .attr('y', data=>{return -self.spec.scaleH(data.value)})
      .attr('height', data=>{return self.spec.scaleH(data.value)});
    self.linePath.transition().duration(self.spec.animTime/3).attr('opacity', 0);
  }
  drawlinePath() {
    let self = this;
    self.workSpace.selectAll('g.bar').select('rect').transition().duration(self.spec.animTime/3)
      .attr('opacity', (data,index)=>{return self.graphSpec.barStyle.opacity})
      .attr('x', (data,index)=>{return (self.spec.slotW - self.spec.barW)/2})
      .attr('width', (data,index)=>{return self.spec.barW})
      .style('fill', (data,index)=>{return self.graphSpec.barStyle.colorText})
      .attr('y', data=>{return -self.spec.scaleH(data.value)})
      .attr('height', data=>{return self.spec.scaleH(data.value)});

    var tempData = [self.graphSpec.data[0]];
    self.graphSpec.data.map(d=>{tempData.push(d)});
    tempData.push(self.graphSpec.data[self.graphSpec.data.length-1]);

    var line = d3.line()
      .x((d,i)=>{
        if (i==0) return 0;
        else if (i==tempData.length-1) return self.spec.slotW*(i-3/2) + self.spec.barW/2;
        else return self.spec.slotW*(i - 1/2);
      })
      .y(d=>{return self.height - self.spec.scaleH(d.value)})
      .curve(d3.curveMonotoneX);
    self.linePath
      .datum(tempData)
      .attr('d', line).attr('opacity', 1)
      .style('fill', 'none').attr('stroke-width', self.height*0.017)
      // .style('stroke', self.graphSpec.hoverStyle.colorText);
      // .style('stroke', '#00FF00');
      .style('stroke', 'orange');
    var totalLength = self.linePath.node().getTotalLength();
    self.linePath
      .attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', totalLength)
      .transition().duration(self.spec.animTime*1.5).ease(d3.easeLinear)
        .attr('stroke-dashoffset', 0);
  }

}

interface Spec {
  animTime,
  scaleH, scaleY,
  slotW, barW, hoverW,
  xLabEvery, xLabRotate
}

interface GraphSpec {
  data, // array of { desc, value }
  barStyle, // { color, opacity, width, colorText }
  hoverStyle, // { color, type, width, colorText }
  title, // { label, color, colorText, axisColor }
  xAxis, // { label, color, colorText, axisColor }
  yAxis, // { label, color, colorText }
  background // { color }
}

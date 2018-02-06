import { Component, OnInit, Input, ElementRef, transition } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-smart-cart-slider',
  templateUrl: './smart-cart-slider.component.html',
  styleUrls: ['./smart-cart-slider.component.css']
})
export class SmartCartSliderComponent implements OnInit {

  @Input() width = 1000;
  @Input() height = 120;

  @Input() preference = 'Calories';
  private min = 0;
  private max = 10;
  @Input() selectedValue = 5;
  @Output() output:EventEmitter<any> = new EventEmitter();

  private svg;
  private workSpace;
  private spec: Spec;  

  private handle;
  private slider;
  private textLabel;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.setupVariables();
    this.setupSlider();
  }

  setupVariables() {
    let self = this;

    self.spec = {
      animTime: 800,
      scale: d3.scaleLinear().domain([self.min, self.max])
                .range([0, self.width]).clamp(true),
      colorScale: d3.scaleLinear()
                    .domain([self.min, (self.min+self.max)/2, self.max])
                    .range(['#c4dbf0', '#65abd9', '#004da0']),
      greyScale: d3.scaleLinear()
                  .domain([self.min, self.max])
                  .range(['#0e0e0e', '#fffff0']),
      r: self.height*0
    };

    self.svg = d3.select(self.element.nativeElement).select('svg#smart-cart-slider')
      .attr('width', '100%').attr('opacity', 1)
      .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
      // .attr('height', self.height+'px').attr('preserveAspectRatio', 'none')
      .attr('viewBox', '0 0 '+self.width+' '+self.height);
    self.workSpace = self.svg.select('g#work-space');
    if (self.workSpace.empty()) {
      self.workSpace = self.svg.append('g').attr('id', 'work-space');
    }
  }

  setupSlider() {
    let self = this;

    self.workSpace.append('rect').attr('id', 'slider-border')
      .attr('width', self.width).attr('height', self.height)
      .attr('rx', self.spec.r).attr('ry', self.spec.r)
      .style('fill', 'none').style('stroke', '#0e0e0e')
      .attr('stroke-width', self.height*0.1).attr('pointer-events', 'none');

    self.handle = self.workSpace.insert('rect', ':first-child').attr('id', 'handle')
      .attr('height', self.height).attr('width', 0).attr('pointer-events', 'none')
      .attr('rx', self.spec.r).attr('ry', self.spec.r)
      .style('fill', ()=>{return self.spec.colorScale(self.min)})
      .style('stroke', '#0e0e0e').attr('stroke-width', self.height*0.03);
    self.handle.transition().duration(self.spec.animTime)
      .style('fill', ()=>{return self.spec.colorScale(self.selectedValue)})
      .attr('width', ()=>{return self.spec.scale(self.selectedValue)});

    self.slider = self.workSpace.append('rect').attr('id', 'slider')
      .attr('width', self.width).attr('height', self.height).attr('opacity', 0)
      .style('cursor', 'pointer')
      .call(d3.drag()
        .on('start', () => {
          var x = d3.min([d3.max([0, d3.event.x]), self.width]);
          self.sliderChange(x);
        })
        .on('drag', () => {
          var x = d3.min([d3.max([0, d3.event.x]), self.width]);
          self.sliderChange(x);
        })
        .on('end', () => {})
      );
      // .on('click', () => {
      //   d3.mouse(d3.event.currentTarget);
      // });
    self.textLabel = self.workSpace.append('text')
      .attr('text-anchor', 'middle').attr('pointer-events', 'none')
      .attr('font-size', self.height*0.5).style('fill', 'white')
      .attr('font-weight', 'bold').attr('opacity', 0.8)
      .attr('x', self.width/2).attr('y', self.height*0.74)
      .style('fill', ()=>{return self.spec.greyScale(self.selectedValue)})
      .text(()=>{return self.generateTextLabel(self.selectedValue)});
    self.workSpace.insert('rect', ':first-child').attr('id', 'slider-bg')
      .attr('width', self.width).attr('height', self.height)
      .attr('rx', self.spec.r).attr('ry', self.spec.r)
      .style('fill', '#fffff0').attr('pointer-events', 'none');
  }

  sliderChange(x) {
    let self = this;
    var output = self.spec.scale.invert(x);
    self.output.emit({desc:self.preference, value:output});

    self.handle
      .style('fill', ()=>{return self.spec.colorScale(output)})
      .attr('width', ()=>{return x});
    self.textLabel
      .style('fill', ()=>{return self.spec.greyScale(output)})
      .text(()=>{return self.generateTextLabel(output)});
  }
  generateTextLabel(x) {
    let self = this;
    if (x<4) return 'Prefer less';
    else if (x>6) return 'Prefer more';
    else return 'Indifferent';
  }
  updateSliderValue() {
    let self = this;
    self.handle.transition().duration(self.spec.animTime)
      .style('fill', ()=>{return self.spec.colorScale(self.selectedValue)})
      .attr('width', ()=>{return self.spec.scale(self.selectedValue)});
    self.textLabel
      .style('fill', ()=>{return self.spec.greyScale(self.selectedValue)})
      .text(()=>{return self.generateTextLabel(self.selectedValue)});
  }

}

interface Spec {
  animTime, scale, colorScale, greyScale, r
}

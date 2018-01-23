import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as topojson from 'topojson-client';
import * as d3 from 'd3';

@Component({
  selector: 'app-usa-map',
  templateUrl: './usa-map.component.html',
  styleUrls: ['./usa-map.component.css']
})
export class UsaMapComponent implements OnInit {

  @Input() resources;
  @Input() width = 1000;
  @Input() height = 410;

  private play = true;
  private states;
  private lands;

  private host;
  private svg;
  private workSpace;
  private animateSpace;  
  private spec: Spec;

  constructor(private element: ElementRef) { }
  
  ngOnInit() {
    let self = this;
    self.host = d3.select(self.element.nativeElement).select('#us-map');

    self.setupVariables();
    self.initMapUSA();
    // for (var i=0; i<25; i++) {
    //   self.animation();
    // }
  }

  setupVariables() {
    let self = this;

    // Setup internal spec
    self.spec = {
      animTime: 500,
      geoPath: d3.geoPath()
    };

    self.svg = self.host.select('svg');
    if (self.svg.empty()) {
      self.svg = self.host.append('svg')
        .attr('width', '100%').attr('opacity', 1)
        .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
        // .attr('height', self.showH+'px').attr('preserveAspectRatio', 'none')
        .attr('viewBox', '0 0 '+self.width+' '+self.height);
      self.workSpace = self.svg.append('g').attr('id', 'work-space');
      self.animateSpace = self.svg.append('g').attr('id', 'animate-space');      
    } else {
      self.workSpace = self.svg.select('g#work-space');
      self.animateSpace = self.svg.select('g#animate-space');      
    }
  }

  initMapUSA() {
    let self = this;
    // self.svg.append('rect')
    //   .attr('width', self.width).attr('height', self.height)
    //   .style('fill', 'none').style('stroke', '#fffff0')
    //   .attr('stroke-width', 3);

    d3.json(self.resources.mapUSA, mapData=>{
      self.states = topojson.feature(mapData, mapData.objects.states);
      self.lands = self.states.features.map(d=>{
        return d.geometry.coordinates;
      });

      self.workSpace.selectAll('path')
        .data(self.states.features)
        .enter().append('path').attr('class', 'state')
          .attr('d', self.spec.geoPath)
          .style('stroke', '#0e0e0e').attr('stroke-width', 2)
          .style('fill', '#1b1b1b');
      self.workSpace
        .attr('transform', 'scale(0.9, 0.7)translate('+(0.075*self.width)+',0)');
    });
  }

  animation() {
    let self = this;
    if (self.play) {
      var r = (Math.random()*0.07 + 0.03)*self.height,
          offX = 0.075*self.width;
      var time1 = Math.random()*2000+500,
          time2 = Math.random()*2000+500,
          point = [r+offX+Math.random()*(self.width-2*r-2*offX), 
            r+Math.random()*(self.height-2*r)];
      d3.timeout(()=>{
        self.animateSpace.append('circle')
          .attr('cx', point[0]).attr('cy', point[1])
          .style('fill', 'orange').attr('r', 0).attr('opacity', 0.6)
          .transition().duration(time2)
            .attr('r', r).attr('opacity', 0)
            .on('end', ()=>{
              d3.select(this).remove();
              self.animation();
            });
      }, time1);
    }
  }

}

interface Spec {
  animTime,
  geoPath
}

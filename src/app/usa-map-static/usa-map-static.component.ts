import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as topojson from 'topojson-client';
import * as d3 from 'd3';

@Component({
  selector: 'app-usa-map-static',
  templateUrl: './usa-map-static.component.html',
  styleUrls: ['./usa-map-static.component.css']
})
export class UsaMapStaticComponent implements OnInit {

  @Input() resources;
  @Input() width = 1000;
  @Input() height = 410;

  private states;
  private lands;

  private host;
  private svg;
  private workSpace;
  private spec: Spec;

  constructor(private element: ElementRef) { }
  
  ngOnInit() {
    let self = this;
    self.host = d3.select(self.element.nativeElement).select('#us-map-static');

    self.setupVariables();
    self.initMapUSA();
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
    } else {
      self.workSpace = self.svg.select('g#work-space');   
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
        .attr('transform', 'scale(0.95, 0.7)translate('+(0.06*self.width)+',0)')
        .attr('opacity', 0.7);
    });
  }

}

interface Spec {
  animTime,
  geoPath
}

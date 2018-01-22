import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-thank-page',
  templateUrl: './thank-page.component.html',
  styleUrls: ['./thank-page.component.css']
})
export class ThankPageComponent implements OnInit {

  private host;
  private stage = 0;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.element.nativeElement);
  }

  nextStage() {
    let self = this;
    self.stage++;

    if (self.stage==1) {
      self.host.select('.headline').style('opacity', 0);
      self.host.select('#link-info').style('opacity', 0);
      self.host.insert('video', ':first-child').attr('id', 'company-video')
        .attr('width', '100%').attr('height', 'auto').attr('autoplay', true)
        .append('source').attr('type', 'video/mp4')
          .attr('src', 'assets/video/thebigdatasolution.com - lg.mp4')
          .style('position', 'absolute')
          .attr('top', '0').attr('left', '0')
          .style('z-index', '-10');
    } else if (self.stage==2) {
      self.host.select('video').remove();
      self.host.select('#thanks').style('opacity', 1);
    }
  }
  previousStage() {
    let self = this;
    self.stage--;

    if (self.stage==0) {
      self.host.select('video').remove();
      self.host.select('.headline').style('opacity', 1);
      self.host.select('#link-info').style('opacity', 1);
    } else if (self.stage==1) {
      self.host.select('#thanks').style('opacity', 0);
      self.host.insert('video', ':first-child').attr('id', 'company-video')
        .attr('width', '100%').attr('height', 'auto').attr('autoplay', true)
        .append('source').attr('type', 'video/mp4')
          .attr('src', 'assets/video/thebigdatasolution.com - lg.mp4')
          .style('position', 'absolute')
          .attr('top', '0').attr('left', '0')
          .style('z-index', '-10');
    }
  }
  initStage() {
    let self = this;
    if (self.stage==1) self.host.select('video').remove();
    self.host.select('#thanks').style('opacity', 0);
    self.host.select('.headline').style('opacity', 1);
    self.host.select('#link-info').style('opacity', 1);

    self.stage = 0;    
  }

}

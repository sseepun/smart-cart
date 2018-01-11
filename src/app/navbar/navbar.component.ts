import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() title = null;
  @Output() pageNow:EventEmitter<any> = new EventEmitter();
  private page = 'Welcome';
  constructor(private element: ElementRef) {}
  

  ngOnInit() {
  }

  changePage(value) {
    this.pageNow.emit(value);
    this.page = value;
  }

  classPage(value) {
    if (value == this.page) return true;
    else return false;
  }

  collapeSelf() {
    let self = this;
    d3.select(self.element.nativeElement).select('#headerNavbar')
        .attr('class', 'collapse navbar-collapse');
  }

}

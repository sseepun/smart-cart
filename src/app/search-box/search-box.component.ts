import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input() title = 'Search';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Output() searching:EventEmitter<any> = new EventEmitter();
  constructor(private element: ElementRef) { }

  ngOnInit() {
    let self = this;
    if (self.disabled) {
      d3.select(self.element.nativeElement).select('input').attr('disabled', 'disabled');
      d3.select(self.element.nativeElement).select('.search-space').attr('id', 'disabled');
    } else {
      d3.select(self.element.nativeElement).select('input').attr('disabled', null);
      d3.select(self.element.nativeElement).select('.search-space').attr('id', 'active');
    }
  }

  searchTrigger(search) {
    let self = this;
    self.searching.emit(search);
  }

}

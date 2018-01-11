import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-selection-dropdown',
  templateUrl: './selection-dropdown.component.html',
  styleUrls: ['./selection-dropdown.component.css']
})
export class SelectionDropdownComponent implements OnInit {

  @Input() title;
  @Input() choices;
  @Input() choiceDesc;
  @Input() default = null;
  @Input() disabled = false;
  @Output() selected:EventEmitter<any> = new EventEmitter();
  constructor(private element: ElementRef) { }


  ngOnInit() {
    let self = this;
    if (self.disabled) {
      d3.select(self.element.nativeElement).select('select').attr('disabled', 'disabled');
      d3.select(self.element.nativeElement).select('.form-group').attr('id', 'disabled');
    } else {
      d3.select(self.element.nativeElement).select('select').attr('disabled', null);
      d3.select(self.element.nativeElement).select('.form-group').attr('id', 'active');
    }
  }

  chosen(choice) {
    let self = this;
    self.selected.emit(choice);
  }

}

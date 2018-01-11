import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginate-button-set',
  templateUrl: './paginate-button-set.component.html',
  styleUrls: ['./paginate-button-set.component.css']
})
export class PaginateButtonSetComponent implements OnInit {

  @Input() choices;
  @Input() choiceDesc;
  @Input() selectedPage;
  @Output() pageSelect:EventEmitter<any> = new EventEmitter();

  private choiceLength;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.choiceLength = this.choices.length;
  }

  ngOnChanges() {
    let self = this;
    console.log('Pagination -- on changes');
    if (self.choiceLength != self.choices.length) {
      self.choiceLength = self.choices.length;
      self.selectedPage = self.choices[0];
      self.selectPage(self.selectedPage);
    }
  }

  showSelectionPage(index) {
    let self = this;
    if (self.choiceLength < 6) return true;
    else {
      var pos = self.choices.indexOf(self.selectedPage);
      if (pos < 3) {
        if (index < 5) return true;
        else return false;
      } else if (pos > self.choiceLength-4) {
        if (index > self.choiceLength-6) return true;
        else return false;
      } else {
        if (pos-2<=index && index<=pos+2) return true;
        else return false;
      }
    }
  }

  previousDisabled() {
    if (this.choices.indexOf(this.selectedPage)==0) return true;
    else return false; 
  }
  previousPage() {
    let self = this;
    self.selectedPage = Math.max(self.selectedPage-1, self.choices[0]);
    self.selectPage(self.selectedPage);
  }

  nextDisabled() {
    if (this.choices.indexOf(this.selectedPage)==this.choices.length-1) return true;
    else return false;
  }
  nextPage() {
    let self = this;
    self.selectedPage = Math.min(self.selectedPage+1, self.choices[self.choices.length-1]);
    self.selectPage(self.selectedPage);
  }

  firstPage() {
    let self = this;
    self.selectedPage = 1;
    self.selectPage(self.selectedPage);
  }
  lastPage() {
    let self = this;
    self.selectedPage = self.choices[self.choices.length-1];
    self.selectPage(self.selectedPage);
  }

  pageActive(index) {
    if (index==this.choices.indexOf(this.selectedPage)) return true;
    else return false;
  }

  selectPage(page) {
    let self = this;
    self.selectedPage = page;
    self.pageSelect.emit(page);
  }

}

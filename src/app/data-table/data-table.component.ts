import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() data;
  @Input() rowKeys;
  @Input() rowNames;
  @Input() rowWidths;
  @Input() alignCenter;

  private spec: Spec;
  private defaultOrderKeys;

  private selectedPage = 1;
  private pageChoices;
  private showRowText;

  private selectedData;
  private search = '';
  constructor() { }

  ngOnInit() {
    if (this.data!==undefined && this.rowKeys!==undefined && this.rowNames!==undefined) {
      this.defaultOrderKeys = Object.keys(this.data);
      this.setupVariables(25);
      this.updateShowRowText();
    }
  }

  ngOnChanges() {
    if (this.data!==undefined && this.rowKeys!==undefined && this.rowNames!==undefined) {
      this.defaultOrderKeys = Object.keys(this.data);
      this.setupVariables(25);
      this.updateShowRowText();
    }
  }

  setupVariables(showRowNum) {
    let self = this;
    
    // Search filter
    if (self.search == '') {
      self.selectedData = self.data;
      var tablePageNum = Math.ceil(self.defaultOrderKeys.length/showRowNum);
      self.spec = {
        showRowNum:showRowNum, dataLength:self.defaultOrderKeys.length,
        tablePageNum:tablePageNum, orderKeys:self.defaultOrderKeys
      };
    } else {
      var search = self.search.toLowerCase();
      self.selectedData = {};
      self.defaultOrderKeys.map(station => {
        var isIn = false, d = self.data[station];
        self.rowKeys.map(k => {
          if (d[k].toString().toLowerCase().indexOf(search) > -1) isIn = true;
        });
        if (isIn) self.selectedData[station] = d;
      });

      var orderKeys = Object.keys(self.selectedData),
          tablePageNum = Math.ceil(orderKeys.length/showRowNum);
      self.spec = {
        showRowNum:showRowNum, dataLength:orderKeys.length,
        tablePageNum:tablePageNum, orderKeys:orderKeys
      };
    }

    // Page choices for paginate buttons
    self.pageChoices = [];
    for (let i=0; i<self.spec.tablePageNum; i++) self.pageChoices.push(i+1);
  }

  rowClass(k) {
    if (k%2 == 0) return false;
    else return true;
  }
  rowShow(k) {
    let self = this;
    var start = (self.selectedPage-1)*self.spec['showRowNum'],
        end = self.selectedPage*self.spec['showRowNum'];
    if (start<=k && k<end) return true;
    else return false;
  }

  updateShowRowText() {
    let self = this;
    var start = (self.selectedPage-1)*self.spec['showRowNum']+1,
        end = self.selectedPage*self.spec['showRowNum'],
        fullLength = self.defaultOrderKeys.length,
        filterLength = Object.keys(self.selectedData).length;

    if (self.search == '') {
      end = Math.min(end, fullLength);
      self.showRowText = 'Showing '+start+' to '+end+' of '+fullLength+' entries';
    } else {
      start = Math.min(start, filterLength);
      end = Math.min(end, filterLength);
      self.showRowText = 'Showing '+start+' to '+end+' of '+filterLength
          +' entries (filtered from '+fullLength+' total entries)';
    }
  }

  selectShowRowNum(value) {
    let self = this;
    if (value == 0) self.setupVariables(self.defaultOrderKeys.length);
    else self.setupVariables(value);
    self.updateShowRowText();
  }

  searchTrigger(search) {
    let self = this;
    self.search = search;
    self.selectedPage = 1;
    self.setupVariables(self.spec.showRowNum);
    self.updateShowRowText();
  }

  selectTablePage(page) {
    let self = this;
    self.selectedPage = page;
    self.setupVariables(self.spec.showRowNum);
    self.updateShowRowText();
  }

}

interface Spec {
  showRowNum, dataLength, tablePageNum, orderKeys
}

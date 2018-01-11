import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-smart-cart-page',
  templateUrl: './smart-cart-page.component.html',
  styleUrls: ['./smart-cart-page.component.css']
})
export class SmartCartPageComponent implements OnInit {

  @ViewChild('smartCartApp') smartCartApp;
  private appPageArray = ['Welcome', 'Preference', 'Shopping', 'Suggestion', 'Summary'];
  private appPage = 'Welcome';
  // private appPage = 'Summary';

  constructor() { }

  ngOnInit() {
  }

  appPageChange(page) {
    this.appPage = page;
  }

  appNextPage() {
    var index = this.appPageArray.indexOf(this.appPage);
    if (index < this.appPageArray.length-1) {
      this.appPage = this.appPageArray[index+1];
      this.smartCartApp.appNextPage();      
    }
  }
  appPreviousPage() {
    var index = this.appPageArray.indexOf(this.appPage);
    if (index > 0) {
      this.appPage = this.appPageArray[index-1];
      this.smartCartApp.appPreviousPage();      
    }
  }
  appReset() {
    this.appPage = 'Welcome';
    this.smartCartApp.appPage = 'Welcome';
    this.smartCartApp.welcomeProcess();
  }

}

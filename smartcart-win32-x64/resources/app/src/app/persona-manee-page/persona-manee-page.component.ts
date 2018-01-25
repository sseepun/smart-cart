import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-persona-manee-page',
  templateUrl: './persona-manee-page.component.html',
  styleUrls: ['./persona-manee-page.component.css']
})
export class PersonaManeePageComponent implements OnInit {

  @ViewChild('smartCartApp') smartCartApp;
  private appPageArray = ['Welcome', 'Preference', 'Shopping', 'Suggestion', 'Summary'];
  private appPage = 'Welcome';
  // private appPage = 'Summary';
  
  private init = false;

  constructor() { }

  ngOnInit() {
  }

  appPageChange(page) {
    this.appPage = page;
  }

  appNextPage() {
    var index = this.appPageArray.indexOf(this.appPage);
    if (!this.init) {
      this.init = true;
    } else if (index < this.appPageArray.length-1) {
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

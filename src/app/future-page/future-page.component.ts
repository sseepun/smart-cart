import { Component, OnInit, Input } from '@angular/core';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-future-page',
  templateUrl: './future-page.component.html',
  styleUrls: ['./future-page.component.css']
})
export class FuturePageComponent implements OnInit {

  @Input() resources;
  constructor() { }

  ngOnInit() {
  }

}

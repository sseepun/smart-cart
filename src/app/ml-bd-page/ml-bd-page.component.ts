import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-ml-bd-page',
  templateUrl: './ml-bd-page.component.html',
  styleUrls: ['./ml-bd-page.component.css']
})
export class MlBdPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/json/particles.json', null);
  }

}

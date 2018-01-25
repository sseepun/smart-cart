import { Component, OnInit, Input } from '@angular/core';
// declare var particlesJS: any;

@Component({
  selector: 'app-ml-bd-page',
  templateUrl: './ml-bd-page.component.html',
  styleUrls: ['./ml-bd-page.component.css']
})
export class MlBdPageComponent implements OnInit {

  @Input() resources;
  constructor() { }

  ngOnInit() {
    // particlesJS.load('particles-js', this.resources.particleFile, null);
  }

}

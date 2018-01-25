import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  private graphHotDog: GraphSpec;  
  private graphBread: GraphSpec;
  private graphChocIceCream: GraphSpec;
  private graphOrangeJuice: GraphSpec;
  private graphVeggies: GraphSpec;
  private graphFruits: GraphSpec;

  constructor() { }

  ngOnInit() {
    this.setupGraphSpec();
  }

  setupGraphSpec() {
    this.graphHotDog = {
      data: [
        {desc:'Bread1', value:1, color:'#71a9db'},
        {desc:'Bread1', value:7, color:'#f58a4c'},
        {desc:'Bread1', value:1, color:'#adadad'},
        {desc:'Bread1', value:3, color:'#ffc52d'}
      ],
      background: {
        color: 'none'
      }
    }
    this.graphBread = {
      data: [
        {desc:'Bread1', value:5, color:'#71a9db'},
        {desc:'Bread1', value:4, color:'#f58a4c'},
        {desc:'Bread1', value:0, color:'#adadad'},
        {desc:'Bread1', value:3, color:'#ffc52d'}
      ],
      background: {
        color: 'none'
      }
    }
    this.graphChocIceCream = {
      data: [
        {desc:'Bread1', value:3, color:'#71a9db'},
        {desc:'Bread1', value:6, color:'#f58a4c'},
        {desc:'Bread1', value:1, color:'#adadad'},
        {desc:'Bread1', value:2, color:'#ffc52d'}
      ],
      background: {
        color: 'none'
      }
    }
    this.graphOrangeJuice = {
      data: [
        {desc:'Bread1', value:3, color:'#71a9db'},
        {desc:'Bread1', value:3, color:'#f58a4c'},
        {desc:'Bread1', value:0, color:'#adadad'},
        {desc:'Bread1', value:6, color:'#ffc52d'}
      ],
      background: {
        color: 'none'
      }
    }
    this.graphVeggies = {
      data: [
        {desc:'Bread1', value:2, color:'#71a9db'},
        {desc:'Bread1', value:6, color:'#f58a4c'},
        {desc:'Bread1', value:4, color:'#adadad'},
        {desc:'Bread1', value:0, color:'#ffc52d'}
      ],
      background: {
        color: 'none'
      }
    }
    this.graphFruits = {
      data: [
        {desc:'Bread1', value:2, color:'#71a9db'},
        {desc:'Bread1', value:4, color:'#f58a4c'},
        {desc:'Bread1', value:2, color:'#adadad'},
        {desc:'Bread1', value:4, color:'#ffc52d'}
      ],
      background: {
        color: 'none'
      }
    }
  }

}

interface GraphSpec {
  data, // array of { desc, value, color }
  background // { color }
}

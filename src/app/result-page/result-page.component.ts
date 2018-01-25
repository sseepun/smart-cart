import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  private stage = 0;
  private title = 'Result';
  private isDone = false;

  private graphHotDog: GraphSpec;  
  private graphBread: GraphSpec;
  private graphChocIceCream: GraphSpec;
  private graphOrangeJuice: GraphSpec;
  private graphVeggies: GraphSpec;
  private graphFruits: GraphSpec;

  @ViewChild('bar1') bar1;
  @ViewChild('bar2') bar2;
  @ViewChild('bar3') bar3;
  @ViewChild('bar4') bar4;
  @ViewChild('bar5') bar5;
  @ViewChild('bar6') bar6;

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

  processIsDone(e) {
    this.isDone = e;
  }

  nextStage() {
    if (this.isDone) {
      this.bar1.nextStage();
      this.bar2.nextStage();
      this.bar3.nextStage();
      this.bar4.nextStage();
      this.bar5.nextStage();
      this.bar6.nextStage();

      this.stage = Math.min(5, this.stage+1);
      this.updateTitle();
    }
  }
  previousStage() {
    if (this.isDone) {
      this.bar1.previousStahe();
      this.bar2.previousStahe();
      this.bar3.previousStahe();
      this.bar4.previousStahe();
      this.bar5.previousStahe();
      this.bar6.previousStahe();

      this.stage = Math.max(0, this.stage-1);
      this.updateTitle();
    }
  }
  initStage() {
    if (this.isDone) {
      this.bar1.initStage();
      this.bar2.initStage();
      this.bar3.initStage();
      this.bar4.initStage();
      this.bar5.initStage();
      this.bar6.initStage();

      this.stage = 0;
      this.updateTitle();
    }
  }

  updateTitle() {
    if (this.stage==0 || this.stage==5) this.title = 'Result';
    else if (this.stage==1) this.title = 'Already Pick 5-Star';
    else if (this.stage==2) this.title = "Won't Change";
    else if (this.stage==3) this.title = 'Non 5-Star Alternative';
    else if (this.stage==4) this.title = 'Change to 5-Star';
  }
  titleColor() {
    if (this.stage==0 || this.stage==5) return '#fffff0';
    else if (this.stage==1) return '#71a9db';
    else if (this.stage==2) return '#f58a4c';
    else if (this.stage==3) return '#adadad';
    else if (this.stage==4) return '#ffc52d';
  }

}

interface GraphSpec {
  data, // array of { desc, value, color }
  background // { color }
}

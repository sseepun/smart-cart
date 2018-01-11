import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-sale-page',
  templateUrl: './grocery-sale-page.component.html',
  styleUrls: ['./grocery-sale-page.component.css']
})
export class GrocerySalePageComponent implements OnInit {

  private graphSpec;

  constructor() { }

  ngOnInit() {
    let self = this;

    self.graphSpec = {
      data: [{desc:'92', value:318.3}, {desc:'93', value:322.5}, {desc:'94', value:331.7}, {desc:'95', value:337.8}, {desc:'96', value:347.0},
            {desc:'97', value:354.1}, {desc:'98', value:359.9}, {desc:'99', value:375.4},
            {desc:'00', value:381.4}, {desc:'01', value:396.5}, {desc:'02', value:397.3}, {desc:'03', value:406.3}, {desc:'04', value:418.8},
            {desc:'05', value:435.5}, {desc:'06', value:448.7}, {desc:'07', value:468.4}, {desc:'08', value:488.5}, {desc:'09', value:489.0},
            {desc:'10', value:498.0}, {desc:'11', value:523.4}, {desc:'12', value:539.2}, {desc:'13', value:549.1}, {desc:'14', value:573.8},
            {desc:'15', value:587.9}, {desc:'16', value:600.3}],
      barStyle: {
        color: null, opacity: 0.7, width: 0.7, colorText: 'orange'
      },
      hoverStyle: {
        color: null, type: 2, width: 0.8, colorText: '#428bca'
      },
      title: {
        label: 'Supermarket and other grocery store sales in the United States from 1992 to 2016 <br>(in billion U.S. dollars)', color: null, colorText: '#fffff0'
      },
      xAxis: {
        label: '', color: null, colorText: '#fffff0', axisColor: '#b6b6b2'
      },
      yAxis: {
        label: 'Sales in billion U.S. dollars', color: null, colorText: '#fffff0', axisColor: '#b6b6b2'
      },
      background: {
        color: '#0e0e0e'
      }
    };
  }

}

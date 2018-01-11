import { Component, OnInit, Input } from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import * as canvg from 'canvg-browser';

// Import the DataService
import { WindowRefService } from '../services/window-ref.service';

@Component({
  selector: 'app-html-pdf-button',
  templateUrl: './html-pdf-button.component.html',
  styleUrls: ['./html-pdf-button.component.css']
})
export class HtmlPdfButtonComponent implements OnInit {

  @Input() title = 'Save as PDF';
  @Input() saveId = null;
  @Input() fileName = 'BigData_report';

  // Inject pdfMake service
  constructor(private window: WindowRefService) { }

  ngOnInit() {
  }

  saveAsPDF() {
    let self = this;
    if (self.saveId !== null) {
      console.log('Converting information to canvas...');
      $('#'+self.saveId).css('padding', '40px');
      self.startPdfSavingProcess();
    }
  }

  startPdfSavingProcess() {
    let self = this;
    self.svgToCanvas();
  }

  svgToCanvas() {
    let self = this;
    var container = $('#'+self.saveId);

    // container is the jQuery object of the div that you need to convert to image
    // This div may contain highcharts along with other child divs, etc
    var svgElements = container.find('svg');
    svgElements.each(function() {
      var canvas, xml;
      canvas = document.createElement('canvas');
      canvas.className = 'screen-shot-temp';

      //convert SVG into a XML string
      xml = (new XMLSerializer()).serializeToString(this);

      // Removing the name space as IE throws an error
      xml = xml.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, '');

      // Sizing : need adjustment
      var bbox = this.getBoundingClientRect();
      xml = xml.replace(/width="100%"/g, 'width="'+bbox.width+'px"');
      xml = xml.replace(/height="100%"/g, 'height="'+bbox.height+'px"');
      
      // Draw the SVG onto a canvas
      canvg(canvas, xml);
      $(canvas).insertAfter(this);
      $(this).hide();
    });

    self.allToCanvas();
  }

  allToCanvas() {
    let self = this;
    var div = document.getElementById(self.saveId);

    // Building options
    var bbox = div.getBoundingClientRect();
    var options = {
      // width: bbox.width,
      // height: bbox.height,
      useCORS: true,
      allowTaint: true,
      letterRendering: true
    };

    // Convert to canvas
    html2canvas(div, options)
      .then(canvas => {
        $('#'+self.saveId).css('padding', '0');
        self.startSavingProcess(canvas);
      });
      
    // Delete canvas and show svg element
    var container = $('#'+self.saveId);
    var svgElements = container.find('svg');
    svgElements.each(function() {
      $(this).show();
    });
    var canvasElements = container.find('canvas.screen-shot-temp');
    canvasElements.each(function() {
      $(this).remove();
    });
  }

  startSavingProcess(canvas) {
    let self = this;
    console.log('Start PDF saving process...');

    var pdf = new jsPDF('p', 'pt', 'a4'),
        pdfConf = {pagesplit: false, background: '#333'};
    document.body.appendChild(canvas); // appendChild is required for html to add page in pdf
    
    // Seting window scope using WindowRefService
    self.window.nativeWindow()['html2canvas'] = html2canvas;
    
    pdf.addHTML(canvas, 0, 0, pdfConf, function() {
      document.body.removeChild(canvas);
      pdf.save(self.fileName + '.pdf');
      console.log('Finised PDF saving process.');
    });
  }

}

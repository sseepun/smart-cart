import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.css']
})
export class AnalysisPageComponent implements OnInit {

  @Input() rainData;
  @Input() selectedSpec;
  @Input() fullReport;
  private selectedData;
  private histData = null;
  private report = null;

  private stationKeys;
  private stationDesc;
  private yearChoices;
  private monthObj = {"Jan":"มกราคม", "Feb":"กุมภาพันธ์", "Mar":"มีนาคม", "Apr":"เมษายน", 
                    "May":"พฤษภาคม", "Jun":"มิถุนายน", "Jul":"กรกฎาคม", "Aug":"สิงหาคม", 
                    "Sep":"กันยายน", "Oct":"ตุลาคม", "Nov":"พฤศจิกายน", "Dec":"ธันวาคม"};
  private monthKeys = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                      "Sep", "Oct", "Nov", "Dec"];
  private monthChoices;
  private monthDesc;

  constructor() { }


  ngOnInit() {
    let self = this;

    self.stationKeys = Object.keys(self.rainData);
    self.stationDesc = self.stationKeys.map(function(key) {
      var temp = self.rainData[key].desc;
      if (typeof temp == 'object') return temp[0];
      else return temp;
    });

    self.dataProcess();
  }

  generateHistogramData() {
    let self = this;
    var values;

    if (self.selectedSpec['freq'] == 2) {
      var data = self.selectedData.dataByYear[self.selectedSpec['year']].data;
      var dates = Object.keys(data);
      self.histData = dates.map(key => {
        var value = data[key][self.selectedSpec['month']];
        if (value !== undefined) return {desc:parseInt(key)+1, value:value};
      }).filter(function(element) { return element !== undefined; });
      self.dailyReport();
    } else if (self.selectedSpec['freq'] == 1) {
      values = [0,0,0,0,0,0,0,0,0,0,0,0];
      var data = self.selectedData.dataByYear[self.selectedSpec['year']].data;
      self.monthKeys.map((key, i) => {
        data.map(d => {
          var value = d[key];
          if (value !== undefined) values[i] += value;
        });
      });
      self.histData = self.monthKeys.map((key, i) => {
        return {desc:self.monthObj[key], value:Math.round(values[i]*100)/100};
      });
      self.monthlyReport();
    } else {
      var years = Object.keys(self.selectedData.dataByYear);
      self.histData = years.map(key => {
        var temp = self.selectedData.dataByYear[key].data;
        return {desc:key, value:self.getTotalOneYear(temp)};
      });
      self.yearlyReport();
    }
  }
  getTotalOneYear(data) {
    let self = this;
    var total = 0;
    self.monthKeys.map((key, i) => {
      data.map(d => {
        var value = d[key];
        if (value !== undefined) total += value;
      });
    });
    return Math.round(total*100)/100;
  }

  dailyReport() {
    let self = this;
    var data = self.fullReport[self.selectedSpec['station']]['reportByYear'][self.selectedSpec['year']];
    self.report = self.getDataSource(data);

    var desc = self.selectedData['desc'];
    if (typeof desc != 'string') desc = desc[0];
    self.report['station'] = self.selectedSpec['station']; 
    self.report['descEdit'] = self.descEdit(desc);

    self.report['from'] = self.selectedSpec['year'];
    self.report['totalRain'] = data['totalMonthlyRain'][self.selectedSpec['month']];

    var totalDays = data['monthly'][self.selectedSpec['month']]['r']+data['monthly'][self.selectedSpec['month']]['n'];
    self.report['avgDay'] = Math.round(self.report['totalRain']/totalDays*100)/100;

    self.report['daily'] = {r:data['monthly'][self.selectedSpec['month']]['r'], 
                            n:data['monthly'][self.selectedSpec['month']]['n']};
    self.report['rainProb'] = Math.round(self.report['daily']['r']/totalDays*100)/100;
    self.report['noRainProb'] = 1-self.report['rainProb'];

    // Overall station data
    self.report['overall'] = {};
    var valueArray = self.monthKeys.map(key => {
      var total = Math.round(data['totalMonthlyRain'][key]*100)/100;
      self.report['overall'][key] = {
        month:key, totalRain:total, rank:0,
        dayRain:data['monthly'][key]['r'], noDayRain:data['monthly'][key]['n']
      };
      return total;
    });

    // // Ranking
    valueArray.sort((a,b) => {return b-a});
    self.monthKeys.map(key => {
      var temp = self.report['overall'][key]['totalRain'];
      var rank = valueArray.indexOf(temp);
      self.report['overall'][key]['rank'] = rank+1;
    });
    self.report['dataLength'] = valueArray.length;
  }
  monthlyReport() {
    let self = this;
    var data = self.fullReport[self.selectedSpec['station']]['reportByYear'][self.selectedSpec['year']];
    self.report = self.getDataSource(data);

    var desc = self.selectedData['desc'];
    if (typeof desc != 'string') desc = desc[0];
    self.report['station'] = self.selectedSpec['station']; 
    self.report['descEdit'] = self.descEdit(desc);

    self.report['from'] = self.selectedSpec['year'];
    self.report['yearly'] = {r:data['yearly']['r'], n:data['yearly']['n']};
    self.report['totalRain'] = data['totalRain'];

    var monthLength = Object.keys(data['monthly']).length;
    self.report['avgMonth'] = Math.round(self.report['totalRain']/monthLength*100)/100;
    self.report['avgDay'] = Math.round(self.report['totalRain']/(data['yearly']['r']+data['yearly']['n'])*100)/100;

    self.report['rainProb'] = Math.round(self.report['yearly']['r']/(self.report['yearly']['r']+self.report['yearly']['n'])*100)/100;    
    self.report['noRainProb'] = 1-self.report['rainProb'];

    // Overall station data
    var yearData = self.fullReport[self.selectedSpec['station']]['reportByYear'];  
    self.report['overall'] = {};
    var yearKeys = Object.keys(yearData);
    var valueArray = yearKeys.map(key => {
      var d = yearData[key],
          total = Math.round(d['totalRain']*100)/100;
      self.report['overall'][key] = {
        year:key, totalRain:total, rank:0,
        dayRain:d['yearly']['r'], noDayRain:d['yearly']['n']
      };
      return total;
    });

    // Ranking
    valueArray.sort((a,b) => {return b-a});
    yearKeys.map(key => {
      var temp = self.report['overall'][key]['totalRain'];
      var rank = valueArray.indexOf(temp);
      self.report['overall'][key]['rank'] = rank+1;
    });
    self.report['dataLength'] = valueArray.length;
  }
  yearlyReport() {
    let self = this;
    var data = self.fullReport[self.selectedSpec['station']]['reportByYear'],
        keys = Object.keys(data),
        key = keys[keys.length-1];
    self.report = self.getDataSource(data[key]);

    var desc = self.selectedData['desc'];
    if (typeof desc != 'string') desc = desc[0];
    self.report['station'] = self.selectedSpec['station']; 
    self.report['descEdit'] = self.descEdit(desc);
    
    self.report['from'] = d3.min(keys); self.report['to'] = d3.max(keys);
    self.report['totalRain'] = 0;
    self.report['dayRain'] = {r:0, n:0};
    keys.map(k => {
      var d = data[k];
      self.report['totalRain'] += d['totalRain'];
      self.report['dayRain']['r'] += d['yearly']['r'];
      self.report['dayRain']['n'] += d['yearly']['n'];
    });

    self.report['totalDays'] = self.commafy(self.report['dayRain']['r']+self.report['dayRain']['n']);
    self.report['avgYear'] = self.commafy(self.report['totalRain']/keys.length, 2);
    self.report['avgDay'] = self.commafy(self.report['totalRain']/(self.report['dayRain']['r']+self.report['dayRain']['n']), 2);

    self.report['rainProb'] = Math.round(self.report['dayRain']['r']/(self.report['dayRain']['r']+self.report['dayRain']['n'])*100)/100;    
    self.report['noRainProb'] = 1-self.report['rainProb'];

    // Overall station data
    self.report['overall'] = {};
    var stationKeys = Object.keys(self.fullReport);
    var valueArray = stationKeys.map(key => {
      var desc = self.fullReport[key]['desc'];
      if (typeof desc != 'string') desc = desc[0];
      var avgYear = self.getAverageRainYearly(self.fullReport[key]['reportByYear']);
      self.report['overall'][key] = {
        station:key, descEdit:self.descEdit(desc), rank:0, avgYear:avgYear
      };
      return avgYear;
    });

    // Ranking
    valueArray.sort((a,b) => {return b-a});
    stationKeys.map(key => {
      var temp = self.report['overall'][key]['avgYear'];
      var rank = valueArray.indexOf(temp);
      self.report['overall'][key]['rank'] = rank+1;
    });
    self.report['dataLength'] = valueArray.length;
  }

  getDataSource(data) {
    var tempReport = {by:'', collectedDate:''};
    if (typeof data['by'] == 'object') tempReport['by'] = data['by'][0];
    else tempReport['by'] = data['by'];
    if (typeof data['collectedDate'] == 'object') tempReport['collectedDate'] = data['collectedDate'][0];
    else tempReport['collectedDate'] = data['collectedDate'];
    return tempReport;
  }
  getAverageRainYearly(data) {
    var value = 0,
        keys = Object.keys(data),
        num = keys.length;
    keys.map(key => {
      value += data[key]['totalRain'];
    });
    return Math.round(value/num*100)/100;
  }
  descEdit(desc) {
    var descArray = desc.split(' '),
        res = '';
    for (var i=3; i<descArray.length; i++) {
      res = res + ' ' + descArray[i];
    }
    return res.trim();
  }

  selectStation(value) {
    let self = this;
    self.selectedSpec['station'] = value;
    self.dataProcess();
  }
  selectFrequency(value) {
    let self = this;
    self.selectedSpec['freq'] = value;
    self.dataProcess();
  }
  selectYear(value) {
    let self = this;
    self.selectedSpec['year'] = value;
    self.dataProcess();
  }
  selectMonth(value) {
    let self = this;
    self.selectedSpec['month'] = value;
    self.generateHistogramData();
  }

  commafy(num, digits=0) {
    var temp = parseFloat(num);
    var str;
    temp = Math.round(temp*(10**digits))/(10**digits);
    if (digits>0) {
      str = temp.toString().split('.');
      if (str.length == 1) str = [str, '00'];
      else if (str[1].length == 1) str[1] = str[1]+'0';
      if (str[0].length >= 4) {
          str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      }
      if (str[1].length == 1) str[1] = str[1]+'0';
      return str.join('.');
    } else {
      str = temp.toString();
      if (str.length >= 4) {
          str = str.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      }
      return str;
    }
  }

  dataProcess() {
    let self = this;
    self.selectedData = self.rainData[self.selectedSpec['station']];

    if (self.selectedSpec['freq'] > 0) {
      self.yearChoices = Object.keys(self.selectedData.dataByYear);
      if (self.selectedSpec['year'] === null 
        || self.yearChoices.indexOf(self.selectedSpec['year']) < 0) {
        self.selectedSpec['year'] = self.yearChoices[0];
      }

      if (self.selectedSpec['freq'] > 1) {
        var monthTemp = Object.keys(
          self.selectedData.dataByYear[self.selectedSpec['year']].data[0]
        );
        
        self.monthDesc = self.monthKeys.map(function(d) {
          if ((monthTemp.indexOf(d) > -1)) return self.monthObj[d];
        }).filter(function(element) { return element !== undefined; });
        self.monthChoices = self.monthKeys.map(function(d) {
          if ((monthTemp.indexOf(d) > -1)) return d;
        }).filter(function(element) { return element !== undefined; });

        if (self.selectedSpec['month'] === null
          || self.monthChoices.indexOf(self.selectedSpec['month']) < 0) {
          self.selectedSpec['month'] = self.monthChoices[0];
        }
      }
    }

    self.generateHistogramData();
  }

}
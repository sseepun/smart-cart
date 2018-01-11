import { Component, Input } from '@angular/core';

// Import the DataService
import { DataService } from './services/data.service';
import { WindowRefService } from './services/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // private users;
  // private posts;
  private rainData = null;
  private isCleanData = false;
  private page = 'Welcome';
  private selectedSpec: SelectedSpec;

  private stationKeys;
  private monthKeys = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                        "Sep", "Oct", "Nov", "Dec"];
  private fullReport = null;
  
  constructor(
    private dataService: DataService,
    private window: WindowRefService
  ) {
    // Handle MongoDB process
    // this.dataService.getUsers().subscribe(res => this.users = res);
    // this.dataService.getPosts().subscribe(res => this.posts = res);

    this.dataService.getRainData().subscribe(res => { this.rainData = res.data; });
  }


  doneCleaningData(value) {
    let self = this;
    self.isCleanData = value;
    
    var temp = Object.keys(self.rainData);
    self.selectedSpec = {
      station:temp[0], freq:0, year:null, month:null
    };

    self.stationKeys = Object.keys(self.rainData);
    self.generateFullReport();
  }
  changePage(value) {
    this.page = value;
  }

  generateFullReport() {
    let self = this;
    self.fullReport = {};

    self.stationKeys.map(key => {
      var data = self.rainData[key];
      self.fullReport[key] = {desc:data['desc'], reportByYear:{}};

      var yearKeys = Object.keys(data.dataByYear);
      yearKeys.map(k => {
        var yearData = data.dataByYear[k];
        var tempReport = self.generateOneYearReport(yearData.data);

        self.fullReport[key]['reportByYear'][k] = {
          by:yearData['by'], collectedDate:yearData['collectedDate'],
          monthly:tempReport['monthly'], yearly:tempReport['yearly'], 
          totalMonthlyRain:tempReport['totalMonthlyRain'], 
          totalRain:tempReport['totalRain']
        };
      });
    });
  }
  generateOneYearReport(data) {
    let self = this;
    var monthly = {Jan:{r:0,n:0}, Feb:{r:0,n:0}, Mar:{r:0,n:0}, Apr:{r:0,n:0}, 
                  May:{r:0,n:0}, Jun:{r:0,n:0}, Jul:{r:0,n:0}, Aug:{r:0,n:0},
                  Sep:{r:0,n:0}, Oct:{r:0,n:0}, Nov:{r:0,n:0}, Dec:{r:0,n:0}}, 
        yearly = {r:0, n:0}, 
        totalMonthlyRain = {Jan:0, Feb:0, Mar:0, Apr:0, May:0, Jun:0, Jul:0, 
                            Aug:0, Sep:0, Oct:0, Nov:0, Dec:0},
        totalRain = 0;
    
    data.map(d => {
      var dKeys = Object.keys(d);
      self.monthKeys.map(month => {
        if (dKeys.indexOf(month) > -1) {
          var value = d[month];
          if (value > 0) {
            monthly[month]['r'] += 1; yearly['r'] += 1;
            totalMonthlyRain[month] += value;
            totalRain += value;
          } else {
            monthly[month]['n'] += 1; yearly['n'] += 1;
          }
        }
      });
    });

    return {monthly:monthly, yearly:yearly, totalMonthlyRain:totalMonthlyRain, 
            totalRain:totalRain};
  }

}

interface SelectedSpec {
  station, freq, year, month
}

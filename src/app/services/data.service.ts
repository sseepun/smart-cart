import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private rainData;
  
  constructor(private _http: Http) { }
  
  getRainData() {
    return this._http.get('/api/rainData').map(result => this.rainData = result.json());
  }

}

import { Injectable } from '@angular/core';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowRefService {

  constructor() { }

  nativeWindow() {
    return _window();
  }

}

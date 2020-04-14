import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabSubject: Subject<Number> = new Subject<Number>();

  constructor() { }

  setSelectedTabs(tabIndex) {

  }

  getTabs() {
    return this.tabSubject.asObservable();
  }

}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private httpClient: HttpClient) { }

  getCircuits(): Observable<any> {
    return this.httpClient.get('./assets/circuits.json');
  }
}
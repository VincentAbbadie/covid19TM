import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Circuit } from '../models/circuit';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  circuitSubjet: Subject<Circuit> = new Subject<Circuit>();

  constructor(private httpClient: HttpClient) { }

  getCircuits(): Observable<any> {
    return this.httpClient.get('./assets/circuits.json');
  }

  setSelecedCircuit(selectedCircuit: Circuit): void {
    this.circuitSubjet.next(selectedCircuit);
  }

  getSelectedCircuit(): Observable<Circuit> {
    return this.circuitSubjet.asObservable();
  }
}
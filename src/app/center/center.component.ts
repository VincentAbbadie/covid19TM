import { Component, OnInit } from '@angular/core';
import { CircuitService } from '../services/circuit.service';
import { Circuit } from '../models/circuit';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  circuits: Circuit[];

  constructor(private circuitService: CircuitService) { }

  ngOnInit() {
    this.circuitService.getCircuits

  }

  selectCircuit(selectedCircuit: Circuit): void {
    // console.log('selctedCircuit', selectedCircuit);
    this.circuitService.setSelecedCircuit(selectedCircuit);
  }

}

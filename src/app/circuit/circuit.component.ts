import { Component, OnInit } from '@angular/core';
import { CircuitService } from '../services/circuit.service';
import { Circuit, Podium } from '../models/circuit';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {

  circuits: Circuit[];
  selectedCircuit: Circuit;

  constructor(private circuitService: CircuitService) { }

  ngOnInit() {
    this.circuitService.getCircuits().subscribe(
      data => {
        this.circuits = data;

        this.circuits.forEach(
          circuit => {
            let podium: Podium = circuit.podium.find(
              p => {
                return p.position == 1;
              }
            );
            circuit.meilleurJoueur = podium.joueur;
            circuit.meilleurTemps = podium.temps;
          }
        );
      }
    );
  }

  selectCircuit(circuit: Circuit): void {
    this.selectedCircuit = circuit;
  }

}

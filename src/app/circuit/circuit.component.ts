import { Component, OnInit } from '@angular/core';
import { Circuit } from '../models/circuit';
import { CircuitService } from '../services/circuit.service';
import { JoueurService } from '../services/joueur.service';
import { Joueur } from '../models/joueur';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {

  circuit: Circuit = null;
  joueurs: Joueur[];

  constructor(private circuitService: CircuitService, private joueurService: JoueurService) { }

  ngOnInit() {
    this.circuitService.getSelectedCircuit().subscribe(
      data => {
        this.circuit = data;
        this.circuit.joueurs = [];

        // retrieve all joueur meilleur temps on this circuit
        this.joueurs.forEach(
          joueur => {
            joueur.meilleurTemps.forEach(
              meilleurTemps => {
                if (meilleurTemps.circuitNom == this.circuit.nom) {
                  joueur.temps = meilleurTemps.temps;
                  this.circuit.joueurs.push(joueur);
                }
              }
            );
          }
        );

        this.circuit.joueurs.sort(
          (a, b) => {
            return a.temps < b.temps ? -1 : 1;
          }
        );
      }
    );
    this.joueurService.getJoueurs().subscribe(
      data => {
        this.joueurs = data;
      }
    );
  }

}

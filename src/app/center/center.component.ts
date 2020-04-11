import { Component, OnInit } from '@angular/core';
import { CircuitService } from '../services/circuit.service';
import { JoueurService } from '../services/joueur.service';
import { Circuit } from '../models/circuit';
import { Joueur, MeilleurTemps } from '../models/joueur';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  circuits: Circuit[];
  joueurs: Joueur[];

  constructor(private circuitService: CircuitService, private joueurService: JoueurService) { }


  ngOnInit() {
    this.joueurService.getJoueurs().subscribe(
      data => {
        this.joueurs = data;
        this.circuitService.getCircuits().subscribe(
          data => {
            this.circuits = data;

            // console.log('joueurs : ', this.joueurs);
            // console.log('circuits : ', this.circuits);

            this.circuits.forEach(
              circuit => {

                circuit.meilleurJoueur = "Le Dev";
                circuit.meilleurTemps = "9999";
                // console.log('circuit : ', circuit);

                // Find best player
                this.joueurs.forEach(
                  joueur => {
                    // console.log('joueur : ', joueur);
                    joueur.meilleurTemps.forEach(
                      joueurMeilleurTemps => {
                        if (joueurMeilleurTemps.circuitId == circuit.id && joueurMeilleurTemps.temps < circuit.meilleurTemps) {
                          circuit.meilleurJoueur = joueur.nom;
                          circuit.meilleurTemps = joueurMeilleurTemps.temps;
                        }
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );

  }

  selectCircuit(selectedCircuit: Circuit): void {
    // console.log('selctedCircuit', selectedCircuit);
    this.circuitService.setSelecedCircuit(selectedCircuit);
  }

}

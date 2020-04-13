import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../services/joueur.service';
import { Joueur, Circuit, Podium } from '../models/model';
import { CircuitService } from '../services/circuit.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

  joueurs: Joueur[];
  selectedJoueur: Joueur;

  constructor(private joueurService: JoueurService, private circuitService: CircuitService) { }

  ngOnInit() {
    this.joueurService.getJoueurs().subscribe(
      data => {
        this.joueurs = data;

        this.circuitService.getCircuits().subscribe(
          data2 => {
            let circuits: Circuit[] = data2;
            this.joueurs.forEach(
              joueur => {
                joueur.podiums = [];
                circuits.forEach(
                  circuit => {
                    let joueurPodium = circuit.podium.find(
                      p => {
                        return p.joueur == joueur.nom;
                      }
                    );
                    if (joueurPodium) {
                      joueurPodium.circuit = circuit.nom;
                      joueur.podiums.push(joueurPodium);
                    }
                  }
                );
                console.log('joueur', joueur);
              }
            );
          }
        );
      }
    );
  }

  selectJoueur(joueur: Joueur): void {
    this.selectedJoueur = joueur;
  }

}

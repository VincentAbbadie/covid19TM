import { Joueur } from './joueur';

export class Circuit {
    nom: string;
    mappeur: string;
    id: number;
    meilleurJoueur: string;
    meilleurTemps: string;
    joueurs: Joueur[];
}
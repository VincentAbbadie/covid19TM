import { Joueur } from './joueur';

export class Circuit {
    nom: string;
    mappeur: string;
    id: number;
    podium: Podium[];
    meilleurJoueur: string;
    meilleurTemps: string;
}

export class Podium {
    position: number;
    joueur: string;
    temps: string;
}
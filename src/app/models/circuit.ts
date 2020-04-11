import { Joueur } from './joueur';

export class Circuit {
    nom: string;
    mappeur: string;
    id: number;
    podium: Podium[];
}

export class Podium {
    position: number;
    joueur: Joueur;
    temps: string;
}
export class Joueur {
    id: number;
    nom: string;
    podiums: Podium[];
}

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
    circuit: string;
}
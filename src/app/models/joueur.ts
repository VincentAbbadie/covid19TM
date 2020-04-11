export class Joueur {
    id: number;
    nom: string;
    meilleurTemps: MeilleurTemps[];
    temps: string;
}

export class MeilleurTemps {
    circuitId: number;
    temps: string;
}


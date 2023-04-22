import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { Immatriculation } from 'src/immatriculation/entities/immatriculation.entity';
export declare enum DEGREE {
    LICENCE = "licence",
    MAITRISE = "maitrise",
    DOCTORAT = "doctorat",
    CERTIFICAT = "certificat",
    DIPLOME = "diplome"
}
export declare class Faculte {
    id: number;
    nom_faculte: string;
    degree: DEGREE;
    duree: number;
    description: string;
    note_de_passage: number;
    nombre_matiere: number;
    createdAt: Date;
    updatedAt: Date;
    catalogue: Catalogue;
    immatriculation: Immatriculation;
}

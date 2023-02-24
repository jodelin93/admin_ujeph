import { DEGREE } from "../entities/faculte.entity";
export declare class CreateFaculteDto {
    nom_faculte: string;
    degree: DEGREE;
    duree: number;
    note_de_passage: number;
    nombre_matiere: number;
    description: string;
}

import { Catalogue } from "../../catalogue/entities/catalogue.entity";
import { Courses } from "../../course/entities/courses.entity";
import { Student } from "../../students/entities/student.entity";
import { Faculte } from "../../faculte/entities/faculte.entity";
export declare class Note {
    id: number;
    coursesId: string;
    etudiantId: string;
    faculteId: string;
    semestre: string;
    notes: string;
    remarques: string;
    annee_academique: string;
    niveau: string;
    isreprise: boolean;
    createdAt: Date;
    updatedAt: Date;
    catalogue: Catalogue;
    courses: Courses[];
    etudiant: Student[];
    faculte: Faculte[];
}

import { Courses } from "src/course/entities/courses.entity";
import { Faculte } from "src/faculte/entities/faculte.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
export declare class Catalogue {
    id: number;
    semestre: string;
    faculteId: number;
    coursesId: number;
    annee_academique: string;
    status: number;
    matiere_base: number;
    note_passage: number;
    createdAt: Date;
    updatedAt: Date;
    courses: Courses[];
    faculte: Faculte[];
    teacher: Teacher[];
}

import { Student } from 'src/students/entities/student.entity';
export declare class Immatriculation {
    id: number;
    annee: string;
    niveau: string;
    vacation: string;
    degre: string;
    student: Student;
    faculte: Student;
    createdAt: Date;
    updatedAt: Date;
}

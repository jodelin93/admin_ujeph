import { Faculte } from 'src/faculte/entities/faculte.entity';
import { Student } from 'src/students/entities/student.entity';
export declare class Immatriculation {
    id: number;
    annee: string;
    niveau: string;
    vacation: string;
    degree: string;
    faculteId: number;
    studentId: number;
    student: Student;
    faculte: Faculte;
    createdAt: Date;
    updatedAt: Date;
}

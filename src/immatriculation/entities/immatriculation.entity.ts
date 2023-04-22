import { Faculte } from 'src/faculte/entities/faculte.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Immatriculation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    annee: string;

    @Column()
    niveau: string
    
    @Column()
    vacation: string
    
    @Column()
    degree: string

    @Column()
    faculteId: number
    
    @Column()
    studentId:number

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Faculte, (faculte) => faculte.immatriculation, { eager: true })
    faculte: Faculte[];

    @ManyToOne(() => Student, (student) => student.immatriculation, { eager: true })
    student: Student[];
 }

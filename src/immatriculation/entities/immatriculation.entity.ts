import { Faculte } from 'src/faculte/entities/faculte.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
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

    @OneToOne(() => Student, (student) => student.immatriculation)
    @JoinColumn()
    student: Student;

    @OneToOne(() => Faculte, (faculte) => faculte.immatriculation)
    @JoinColumn()
    faculte: Faculte;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
 }

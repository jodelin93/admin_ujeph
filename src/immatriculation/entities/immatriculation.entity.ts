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

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
 }

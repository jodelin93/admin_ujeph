import { Immatriculation } from "src/immatriculation/entities/immatriculation.entity";
import { Person } from "src/persons/entities/person.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StudentInformationsCompementaires } from "./student.infos.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    code: string;

    @Column()
    lieu_naissance: string;

    @Column({nullable:true})
    groupe_sanguin: string;

    @Column()
    statut_matrimonial: string;

    @Column({nullable:true})
    cin: string;

    @Column({nullable:true})
    nif: string;

    @Column("tinyint",{default:0})
    isValidate: boolean;

    @Column("tinyint",{default:1})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    personId: number;
  
    @OneToOne(() => Person)
    @JoinColumn()
    person: Person;

    @OneToOne(()=>Immatriculation,(immatriculation)=>immatriculation.student)
    immatriculation: Immatriculation;

    @OneToOne(() => StudentInformationsCompementaires,studentinfo=>studentinfo.student)
    studentinfos: StudentInformationsCompementaires;

 
}

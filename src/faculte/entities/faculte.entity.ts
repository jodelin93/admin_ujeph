import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export enum DEGREE {
      LICENCE = 'licence',
      MAITRISE = 'maitrise',
      DOCTORAT = 'doctorat',
      CERTIFICAT = 'certificat',
      DIPLOME='diplome'
  }
  
  @Entity()
  export class Faculte {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nom_faculte: string;
  
    @Column({type:"enum",enum:DEGREE, default:DEGREE.LICENCE})
    degree: DEGREE;
  
    @Column({ default: 4 })
    duree: number;
      
    @Column({type:"text",nullable:true })
    description: string;
  
    @Column({nullable:true})
    note_de_passage: number;
  
    @Column({nullable:true})
    nombre_matiere: number;
  
   @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    
  }
  
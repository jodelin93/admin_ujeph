import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Anneeacademique {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    annee_academique:string;
}

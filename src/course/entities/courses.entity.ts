import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {Note} from "../../notes/entities/note.entity";

@Entity()
export class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code_cours: string;
  
    @Column()
    nom_cours: string;
    
    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Catalogue, (catalogue) => catalogue.courses)
    catalogue: Catalogue;

    @OneToMany(() => Note, (note) => note.courses)
    notes: Note;
}

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
}

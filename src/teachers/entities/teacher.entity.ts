import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { Person } from 'src/persons/entities/person.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
export enum Niveau {
  LICENCE = 'licence',
  MAITRISE = 'maitrise',
  DOCTORAT = 'doctorat',
}
@Entity()
export class Teacher {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'enum', enum: Niveau, default: Niveau.LICENCE })
  niveau: string;

  @Column()
  personId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Person,)
  @JoinColumn()
  person: Person;

  @OneToMany(() => Catalogue, (catalogue) => catalogue.teacher)
    catalogue: Catalogue;
}

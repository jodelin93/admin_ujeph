import { Person } from 'src/persons/entities/person.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToOne(() => Person,)
  @JoinColumn()
  person: Person;
}

import { Person } from 'src/persons/entities/person.entity';
export declare class Employee {
    id: number;
    fonction: string;
    date_embauche: Date;
    salaire: number;
    createdAt: Date;
    updatedAt: Date;
    personId: number;
    person: Person;
}

import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
export declare class Courses {
    id: number;
    code_cours: string;
    nom_cours: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    catalogue: Catalogue;
}

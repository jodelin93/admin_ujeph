import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { Note } from "../../notes/entities/note.entity";
export declare class Courses {
    id: number;
    code_cours: string;
    nom_cours: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    catalogue: Catalogue;
    notes: Note;
}

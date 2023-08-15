import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(createNoteDto: CreateNoteDto, id_etudiant: number, id_cours: number, id_faculte: number, niveau: string): Promise<any>;
    findAll(): Promise<import("./entities/note.entity").Note[]>;
    findOne(id_etudiant: string, semestre: string, annee_academique: string, niveau: string): Promise<import("./entities/note.entity").Note[]>;
    findOneNote(id_etudiant: string, semestre: string, annee_academique: string, niveau: string, id_cours: string): Promise<import("./entities/note.entity").Note>;
    update(id: string, updateNoteDto: UpdateNoteDto): Promise<import("./entities/note.entity").Note>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

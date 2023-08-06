import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Repository } from "typeorm/repository/Repository";
import { Note } from "./entities/note.entity";
import { StudentsService } from "../students/students.service";
import { FaculteService } from "../faculte/faculte.service";
import { CourseService } from "../course/course.service";
export declare class NotesService {
    private readonly noteRepo;
    private studentService;
    private faculteService;
    private coursService;
    constructor(noteRepo: Repository<Note>, studentService: StudentsService, faculteService: FaculteService, coursService: CourseService);
    create(createNoteDto: CreateNoteDto, id_etudiant: number, id_cours: number, id_faculte: number, niveau: string): Promise<any>;
    findAll(): Promise<Note[]>;
    findOne(id_etudiant: string, semestre: string, annee_academique: string, niveau: string): Promise<Note[]>;
    update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

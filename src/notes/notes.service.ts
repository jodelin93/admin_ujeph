import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {Repository} from "typeorm/repository/Repository";
import {Note} from "./entities/note.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {StudentsService} from "../students/students.service";
import {FaculteService} from "../faculte/faculte.service";
import {CourseService} from "../course/course.service";

@Injectable()
export class NotesService {
  constructor(
      @InjectRepository(Note)
      private  readonly noteRepo:Repository<Note>,
      private studentService:StudentsService,
      private faculteService:FaculteService,
      private coursService:CourseService
      ) {
  }
  async create(createNoteDto: CreateNoteDto, id_etudiant: number, id_cours: number, id_faculte: number, niveau: string):Promise<any> {
    const etudiant = await this.studentService.findOne({id:id_etudiant});
    const faculte = await this.faculteService.findOne(id_faculte);
    const cours = await this.coursService.findOne({id:id_cours});
    const note = this.noteRepo.create(createNoteDto);
    note.etudiantId = etudiant.id;
    note.faculteId = faculte.id;
    note.coursesId = cours.id;
    note.niveau=niveau;
    return await this.noteRepo.save(note);
  }

  async findAll() {
    return this.noteRepo.find();
  }

  async findOne(id_etudiant: string, semestre: string, annee_academique: string, niveau: string,id_faculte: string) {

    return await this.noteRepo.find({where:{etudiantId:id_etudiant,semestre,annee_academique,niveau,faculteId:id_faculte}})
  }

  async findOneNote(id_etudiant: string, semestre: string, annee_academique: string, niveau: string,id_cours:string,id_faculte: string) {

    return await this.noteRepo.findOne({where:{etudiantId:id_etudiant,semestre,annee_academique,niveau,coursesId:id_cours,faculteId:id_faculte}})
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
     let isreprise=false
    if(updateNoteDto.isreprise) {
      isreprise = true
    }
   const note= await this.noteRepo.preload({id:id,isreprise,...updateNoteDto})
    return await this.noteRepo.save(note);

  }

  async remove(id: number) {

    const note = await this.noteRepo.findOne({where:{id:id}});
    if(!note) throw new NotFoundException("note not found");

    return await this.noteRepo.delete(id);
  }
}

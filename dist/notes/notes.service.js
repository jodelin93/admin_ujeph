"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const Repository_1 = require("typeorm/repository/Repository");
const note_entity_1 = require("./entities/note.entity");
const typeorm_1 = require("@nestjs/typeorm");
const students_service_1 = require("../students/students.service");
const faculte_service_1 = require("../faculte/faculte.service");
const course_service_1 = require("../course/course.service");
let NotesService = class NotesService {
    constructor(noteRepo, studentService, faculteService, coursService) {
        this.noteRepo = noteRepo;
        this.studentService = studentService;
        this.faculteService = faculteService;
        this.coursService = coursService;
    }
    async create(createNoteDto, id_etudiant, id_cours, id_faculte) {
        const etudiant = await this.studentService.findOne(id_etudiant);
        const faculte = await this.faculteService.findOne(id_faculte);
        const cours = await this.coursService.findOne(id_cours);
        const note = this.noteRepo.create(createNoteDto);
        console.log(etudiant);
        note.etudiantId = etudiant.id;
        note.faculteId = faculte.id;
        note.coursesId = cours.id;
        return await this.noteRepo.save(note);
    }
    async findAll() {
        return this.noteRepo.find();
    }
    async findOne(id_etudiant, semestre, annee_academique) {
        return await this.noteRepo.find({ where: { etudiantId: id_etudiant, semestre, annee_academique } });
    }
    async update(id, updateNoteDto) {
        let isreprise = false;
        if (updateNoteDto.isreprise) {
            isreprise = true;
        }
        const note = await this.noteRepo.preload(Object.assign({ id: id, isreprise }, updateNoteDto));
        return await this.noteRepo.save(note);
    }
    async remove(id) {
        const note = await this.noteRepo.findOne({ where: { id: id } });
        if (!note)
            throw new common_1.NotFoundException("note not found");
        return await this.noteRepo.delete(id);
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.Note)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        students_service_1.StudentsService,
        faculte_service_1.FaculteService,
        course_service_1.CourseService])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map
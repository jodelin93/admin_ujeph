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
exports.CatalogueService = void 0;
const common_1 = require("@nestjs/common");
const abstract_service_1 = require("../commons/abstract.service");
const typeorm_1 = require("@nestjs/typeorm");
const catalogue_entity_1 = require("./entities/catalogue.entity");
const typeorm_2 = require("typeorm");
const faculte_service_1 = require("../faculte/faculte.service");
const teachers_service_1 = require("../teachers/teachers.service");
const course_service_1 = require("../course/course.service");
let CatalogueService = class CatalogueService extends abstract_service_1.AbstracService {
    constructor(catalogueRepo, faculteService, teacherService, courseService) {
        super(catalogueRepo);
        this.catalogueRepo = catalogueRepo;
        this.faculteService = faculteService;
        this.teacherService = teacherService;
        this.courseService = courseService;
    }
    async create(data) {
        const faculte = await this.faculteService.findOne(data.faculteId);
        const teacher = await this.teacherService.findOne({ id: data.teacherId });
        const courses = await this.courseService.findOne({ id: data.coursesId });
        const catalogue = this.catalogueRepo.create({
            semestre: data.semestre,
            matiere_base: data.matiere_base,
            note_passage: data.note_passage,
            annee_academique: data.annee_academique,
            teacher,
            courses,
            faculte,
        });
        if (faculte && teacher && courses) {
            const catalogueSaved = await this.catalogueRepo.findOne({
                where: { coursesId: courses.id, semestre: data.semestre, faculteId: faculte.id },
            });
            if (catalogueSaved) {
                throw new common_1.BadRequestException('ce cours a deja ete attribuer a cette faculte pour ce meme semestre');
            }
            return await this.catalogueRepo.save(catalogue);
        }
        else {
            throw new common_1.BadRequestException('toutes les ressources doivent disponibles dans la base');
        }
    }
    async updateTeacher(id, teacherId) {
        const teacher = await this.teacherService.findOne({ id: teacherId });
        const catalogue = await this.catalogueRepo.preload({ id });
        catalogue.teacher = teacher;
        return await this.catalogueRepo.save(catalogue);
    }
    async findAllFilter(faculteId, semestre, annee_academique) {
        const faculte = await this.faculteService.findOne(faculteId);
        return await this.catalogueRepo.find({
            where: {
                faculteId: faculte.id,
                semestre,
                annee_academique,
            },
        });
    }
};
CatalogueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(catalogue_entity_1.Catalogue)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        faculte_service_1.FaculteService,
        teachers_service_1.TeachersService,
        course_service_1.CourseService])
], CatalogueService);
exports.CatalogueService = CatalogueService;
//# sourceMappingURL=catalogue.service.js.map
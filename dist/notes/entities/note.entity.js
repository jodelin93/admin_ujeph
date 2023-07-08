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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const typeorm_1 = require("typeorm");
const catalogue_entity_1 = require("../../catalogue/entities/catalogue.entity");
const courses_entity_1 = require("../../course/entities/courses.entity");
const student_entity_1 = require("../../students/entities/student.entity");
const faculte_entity_1 = require("../../faculte/entities/faculte.entity");
let Note = class Note {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Note.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Note.prototype, "coursesId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Note.prototype, "etudiantId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Note.prototype, "faculteId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Note.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Note.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "remarques", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Note.prototype, "annee_academique", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: false }),
    __metadata("design:type", Boolean)
], Note.prototype, "isreprise", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Note.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Note.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => catalogue_entity_1.Catalogue, (catalogue) => catalogue.courses),
    __metadata("design:type", catalogue_entity_1.Catalogue)
], Note.prototype, "catalogue", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => courses_entity_1.Courses, (courses) => courses.notes, { eager: true }),
    __metadata("design:type", Array)
], Note.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.notes, { eager: true }),
    __metadata("design:type", Array)
], Note.prototype, "etudiant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => faculte_entity_1.Faculte, (faculte) => faculte.notes, { eager: true }),
    __metadata("design:type", Array)
], Note.prototype, "faculte", void 0);
Note = __decorate([
    (0, typeorm_1.Entity)()
], Note);
exports.Note = Note;
//# sourceMappingURL=note.entity.js.map
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
exports.Courses = void 0;
const catalogue_entity_1 = require("../../catalogue/entities/catalogue.entity");
const typeorm_1 = require("typeorm");
const note_entity_1 = require("../../notes/entities/note.entity");
let Courses = class Courses {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Courses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Courses.prototype, "code_cours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Courses.prototype, "nom_cours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Courses.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Courses.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Courses.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => catalogue_entity_1.Catalogue, (catalogue) => catalogue.courses),
    __metadata("design:type", catalogue_entity_1.Catalogue)
], Courses.prototype, "catalogue", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_entity_1.Note, (note) => note.courses),
    __metadata("design:type", note_entity_1.Note)
], Courses.prototype, "notes", void 0);
Courses = __decorate([
    (0, typeorm_1.Entity)()
], Courses);
exports.Courses = Courses;
//# sourceMappingURL=courses.entity.js.map
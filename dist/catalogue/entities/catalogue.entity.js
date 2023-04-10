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
exports.Catalogue = void 0;
const courses_entity_1 = require("../../course/entities/courses.entity");
const faculte_entity_1 = require("../../faculte/entities/faculte.entity");
const teacher_entity_1 = require("../../teachers/entities/teacher.entity");
const typeorm_1 = require("typeorm");
let Catalogue = class Catalogue {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Catalogue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Catalogue.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1, type: "tinyint" }),
    __metadata("design:type", Number)
], Catalogue.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Catalogue.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Catalogue.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => courses_entity_1.Courses, (courses) => courses.catalogue, { eager: true }),
    __metadata("design:type", Array)
], Catalogue.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => faculte_entity_1.Faculte, (faculte) => faculte.catalogue, { eager: true }),
    __metadata("design:type", Array)
], Catalogue.prototype, "faculte", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.catalogue, { eager: true }),
    __metadata("design:type", Array)
], Catalogue.prototype, "teacher", void 0);
Catalogue = __decorate([
    (0, typeorm_1.Entity)()
], Catalogue);
exports.Catalogue = Catalogue;
//# sourceMappingURL=catalogue.entity.js.map
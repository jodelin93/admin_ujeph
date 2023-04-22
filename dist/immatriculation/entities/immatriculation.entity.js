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
exports.Immatriculation = void 0;
const faculte_entity_1 = require("../../faculte/entities/faculte.entity");
const student_entity_1 = require("../../students/entities/student.entity");
const typeorm_1 = require("typeorm");
let Immatriculation = class Immatriculation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Immatriculation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Immatriculation.prototype, "annee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Immatriculation.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Immatriculation.prototype, "vacation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Immatriculation.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Immatriculation.prototype, "faculteId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Immatriculation.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Immatriculation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Immatriculation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => faculte_entity_1.Faculte, (faculte) => faculte.immatriculation, { eager: true }),
    __metadata("design:type", Array)
], Immatriculation.prototype, "faculte", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.immatriculation, { eager: true }),
    __metadata("design:type", Array)
], Immatriculation.prototype, "student", void 0);
Immatriculation = __decorate([
    (0, typeorm_1.Entity)()
], Immatriculation);
exports.Immatriculation = Immatriculation;
//# sourceMappingURL=immatriculation.entity.js.map
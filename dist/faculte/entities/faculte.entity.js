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
exports.Faculte = exports.DEGREE = void 0;
const immatriculation_entity_1 = require("../../immatriculation/entities/immatriculation.entity");
const typeorm_1 = require("typeorm");
var DEGREE;
(function (DEGREE) {
    DEGREE["LICENCE"] = "licence";
    DEGREE["MAITRISE"] = "maitrise";
    DEGREE["DOCTORAT"] = "doctorat";
    DEGREE["CERTIFICAT"] = "certificat";
    DEGREE["DIPLOME"] = "diplome";
})(DEGREE = exports.DEGREE || (exports.DEGREE = {}));
let Faculte = class Faculte {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Faculte.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Faculte.prototype, "nom_faculte", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: DEGREE, default: DEGREE.LICENCE }),
    __metadata("design:type", String)
], Faculte.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 4 }),
    __metadata("design:type", Number)
], Faculte.prototype, "duree", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Faculte.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Faculte.prototype, "note_de_passage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Faculte.prototype, "nombre_matiere", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Faculte.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Faculte.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => immatriculation_entity_1.Immatriculation, (immatriculation) => immatriculation.student),
    __metadata("design:type", immatriculation_entity_1.Immatriculation)
], Faculte.prototype, "immatriculation", void 0);
Faculte = __decorate([
    (0, typeorm_1.Entity)()
], Faculte);
exports.Faculte = Faculte;
//# sourceMappingURL=faculte.entity.js.map
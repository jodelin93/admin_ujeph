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
exports.UpdateNoteDto = void 0;
const create_note_dto_1 = require("./create-note.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateNoteDto extends (0, swagger_1.PartialType)(create_note_dto_1.CreateNoteDto) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'precise si oui ou non la note est une reprise ou pas' }),
    __metadata("design:type", Boolean)
], UpdateNoteDto.prototype, "isreprise", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'semestre' }),
    __metadata("design:type", String)
], UpdateNoteDto.prototype, "semestre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'note pour l\'etudiant' }),
    __metadata("design:type", String)
], UpdateNoteDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'remarque sur la notes' }),
    __metadata("design:type", String)
], UpdateNoteDto.prototype, "remarques", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'annee academique' }),
    __metadata("design:type", String)
], UpdateNoteDto.prototype, "annee_academique", void 0);
exports.UpdateNoteDto = UpdateNoteDto;
//# sourceMappingURL=update-note.dto.js.map
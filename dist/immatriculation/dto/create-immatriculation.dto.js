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
exports.CreateImmatriculationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const faculte_entity_1 = require("../../faculte/entities/faculte.entity");
class CreateImmatriculationDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'vacation de la faculte' }),
    __metadata("design:type", String)
], CreateImmatriculationDto.prototype, "vacation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'niveau de la faculte' }),
    __metadata("design:type", String)
], CreateImmatriculationDto.prototype, "niveau", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'degre de la faculte' }),
    __metadata("design:type", String)
], CreateImmatriculationDto.prototype, "degree", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'annee academique' }),
    __metadata("design:type", String)
], CreateImmatriculationDto.prototype, "annee", void 0);
exports.CreateImmatriculationDto = CreateImmatriculationDto;
//# sourceMappingURL=create-immatriculation.dto.js.map
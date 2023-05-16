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
exports.ImmatriculationController = void 0;
const common_1 = require("@nestjs/common");
const immatriculation_service_1 = require("./immatriculation.service");
const create_immatriculation_dto_1 = require("./dto/create-immatriculation.dto");
const update_immatriculation_dto_1 = require("./dto/update-immatriculation.dto");
const swagger_1 = require("@nestjs/swagger");
let ImmatriculationController = class ImmatriculationController {
    constructor(immatriculationService) {
        this.immatriculationService = immatriculationService;
    }
    create(studentId, faculteId, createImmatriculationDto) {
        return this.immatriculationService.createImmatriculation(faculteId, studentId, createImmatriculationDto);
    }
    findOne(id) {
        return this.immatriculationService.findOneEtudiant(id);
    }
    findOneFaculte(id) {
        return this.immatriculationService.findOneFaculte(id);
    }
    update(id, updateImmatriculationDto) {
        return this.immatriculationService.update(+id, updateImmatriculationDto);
    }
    remove(id) {
        return this.immatriculationService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(':studentId/:faculteId'),
    (0, swagger_1.ApiParam)({
        name: 'studentId',
        type: 'number',
        description: 'id etudiant',
    }),
    (0, swagger_1.ApiParam)({
        name: 'faculteId',
        type: 'number',
        description: 'id faculte',
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for Creating  a immatriculation',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_immatriculation_dto_1.CreateImmatriculationDto,
    }),
    __param(0, (0, common_1.Param)('studentId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('faculteId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, create_immatriculation_dto_1.CreateImmatriculationDto]),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':idEtudiant'),
    (0, swagger_1.ApiParam)({
        name: 'idEtudiant',
        type: 'number',
        description: 'id etudiant',
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for Getting   a immatriculation',
    }),
    __param(0, (0, common_1.Param)('idEtudiant', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('faculte/:idFaculte'),
    (0, swagger_1.ApiParam)({
        name: 'idFaculte',
        type: 'number',
        description: 'id faculte',
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for Getting   a immatriculation',
    }),
    __param(0, (0, common_1.Param)('idFaculte', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "findOneFaculte", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_immatriculation_dto_1.UpdateImmatriculationDto]),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "remove", null);
ImmatriculationController = __decorate([
    (0, common_1.Controller)('immatriculation'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Immatriculation'),
    __metadata("design:paramtypes", [immatriculation_service_1.ImmatriculationService])
], ImmatriculationController);
exports.ImmatriculationController = ImmatriculationController;
//# sourceMappingURL=immatriculation.controller.js.map
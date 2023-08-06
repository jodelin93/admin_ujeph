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
exports.AnneeacademiquesController = void 0;
const common_1 = require("@nestjs/common");
const anneeacademiques_service_1 = require("./anneeacademiques.service");
const create_anneeacademique_dto_1 = require("./dto/create-anneeacademique.dto");
const update_anneeacademique_dto_1 = require("./dto/update-anneeacademique.dto");
const swagger_1 = require("@nestjs/swagger");
let AnneeacademiquesController = class AnneeacademiquesController {
    constructor(anneeacademiquesService) {
        this.anneeacademiquesService = anneeacademiquesService;
    }
    create(createAnneeacademiqueDto) {
        return this.anneeacademiquesService.create(createAnneeacademiqueDto);
    }
    findAll() {
        return this.anneeacademiquesService.findAll();
    }
    findOne(id) {
        return this.anneeacademiquesService.findOne(id);
    }
    update(id, updateAnneeacademiqueDto) {
        return this.anneeacademiquesService.update(+id, updateAnneeacademiqueDto);
    }
    remove(id) {
        return this.anneeacademiquesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a annee academqiue' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_anneeacademique_dto_1.CreateAnneeacademiqueDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_anneeacademique_dto_1.CreateAnneeacademiqueDto]),
    __metadata("design:returntype", void 0)
], AnneeacademiquesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving all the annee academqiues',
    }),
    (0, swagger_1.ApiResponse)({
        type: create_anneeacademique_dto_1.CreateAnneeacademiqueDto,
        description: 'Operation pour recupperer toutes les annees académiques',
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnneeacademiquesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id annee academique',
    }),
    (0, swagger_1.ApiResponse)({ type: create_anneeacademique_dto_1.CreateAnneeacademiqueDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one annee academqiue',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnneeacademiquesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id annee academique ',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully updated.',
        type: update_anneeacademique_dto_1.UpdateAnneeacademiqueDto,
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for updating  annee academqiue',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_anneeacademique_dto_1.UpdateAnneeacademiqueDto]),
    __metadata("design:returntype", void 0)
], AnneeacademiquesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id annee academique',
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  one annee academqiue',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnneeacademiquesController.prototype, "remove", null);
AnneeacademiquesController = __decorate([
    (0, common_1.Controller)('anneeacademiques'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('anneeacademiques'),
    __metadata("design:paramtypes", [anneeacademiques_service_1.AnneeacademiquesService])
], AnneeacademiquesController);
exports.AnneeacademiquesController = AnneeacademiquesController;
//# sourceMappingURL=anneeacademiques.controller.js.map
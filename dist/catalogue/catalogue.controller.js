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
exports.CatalogueController = void 0;
const common_1 = require("@nestjs/common");
const catalogue_service_1 = require("./catalogue.service");
const create_catalogue_dto_1 = require("./dto/create-catalogue.dto");
const update_catalogue_dto_1 = require("./dto/update-catalogue.dto");
const swagger_1 = require("@nestjs/swagger");
let CatalogueController = class CatalogueController {
    constructor(catalogueService) {
        this.catalogueService = catalogueService;
    }
    create(teacherId, faculteId, coursesId, createCatalogueDto) {
        return this.catalogueService.create(Object.assign({ teacherId,
            faculteId,
            coursesId }, createCatalogueDto));
    }
    findAll(page) {
        return this.catalogueService.findAll(page, []);
    }
    findOne(id) {
        return this.catalogueService.findOne(id, ['courses', 'faculte', 'teacher']);
    }
    update(id, updateCatalogueDto) {
        return this.catalogueService.update(+id, updateCatalogueDto);
    }
    updateTeacher(id, teacherId) {
        return this.catalogueService.updateTeacher(id, teacherId);
    }
    remove(id) {
        return this.catalogueService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a Catalogue' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_catalogue_dto_1.CreateCatalogueDto,
    }),
    __param(0, (0, common_1.Query)('teacherId')),
    __param(1, (0, common_1.Query)('faculteId')),
    __param(2, (0, common_1.Query)('coursesId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, create_catalogue_dto_1.CreateCatalogueDto]),
    __metadata("design:returntype", void 0)
], CatalogueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CatalogueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CatalogueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for updating catalogue',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id catalogue'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully updated.',
        type: create_catalogue_dto_1.CreateCatalogueDto,
    }),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for updating  a catalogue' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_catalogue_dto_1.UpdateCatalogueDto]),
    __metadata("design:returntype", void 0)
], CatalogueController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('updateprofesseur/:id'),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for updating a teacher at catalogue',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id catalogue'
    }),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for updating  a teacher catalogue' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('teacherId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CatalogueController.prototype, "updateTeacher", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id catalogue'
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  one catalogue',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CatalogueController.prototype, "remove", null);
CatalogueController = __decorate([
    (0, common_1.Controller)('catalogue'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Catalogues'),
    __metadata("design:paramtypes", [catalogue_service_1.CatalogueService])
], CatalogueController);
exports.CatalogueController = CatalogueController;
//# sourceMappingURL=catalogue.controller.js.map
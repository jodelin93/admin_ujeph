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
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const notes_service_1 = require("./notes.service");
const create_note_dto_1 = require("./dto/create-note.dto");
const update_note_dto_1 = require("./dto/update-note.dto");
const swagger_1 = require("@nestjs/swagger");
const create_faculte_dto_1 = require("../faculte/dto/create-faculte.dto");
let NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
    }
    create(createNoteDto, id_etudiant, id_cours, id_faculte, niveau) {
        return this.notesService.create(createNoteDto, id_etudiant, id_cours, id_faculte, niveau);
    }
    findAll() {
        return this.notesService.findAll();
    }
    findOne(id_etudiant, semestre, annee_academique, niveau) {
        return this.notesService.findOne(id_etudiant, semestre, annee_academique, niveau);
    }
    update(id, updateNoteDto) {
        return this.notesService.update(+id, updateNoteDto);
    }
    remove(id) {
        return this.notesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/:id_etudiant/:id_cours/:id_faculte/:niveau'),
    (0, swagger_1.ApiParam)({
        name: 'id_etudiant',
        type: 'number',
        description: 'id etudiant'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id_cours',
        type: 'number',
        description: 'id cours'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id_faculte',
        type: 'number',
        description: 'id faculte'
    }),
    (0, swagger_1.ApiParam)({
        name: 'niveau',
        type: 'string',
        description: 'niveau etudiant'
    }),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a note' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_note_dto_1.CreateNoteDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id_etudiant', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)('id_cours', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Param)('id_faculte', common_1.ParseIntPipe)),
    __param(4, (0, common_1.Param)('niveau')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto, Number, Number, Number, String]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving all  notes',
    }),
    (0, swagger_1.ApiResponse)({
        type: create_note_dto_1.CreateNoteDto,
        description: 'Operation pour recupperer toutes les notes',
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id_etudiant/:semestre/:annee_academique/:niveau'),
    (0, swagger_1.ApiParam)({
        name: 'id_etudiant',
        type: 'number',
        description: 'id etudiant'
    }),
    (0, swagger_1.ApiParam)({
        name: 'semestre',
        type: 'string',
        description: 'semestre'
    }),
    (0, swagger_1.ApiParam)({
        name: 'annee_academique',
        type: 'string',
        description: 'annee_academique'
    }),
    (0, swagger_1.ApiParam)({
        name: 'niveau',
        type: 'string',
        description: 'niveau'
    }),
    (0, swagger_1.ApiResponse)({ type: create_faculte_dto_1.CreateFaculteDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one faculte',
    }),
    __param(0, (0, common_1.Param)('id_etudiant', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('semestre')),
    __param(2, (0, common_1.Param)('annee_academique')),
    __param(3, (0, common_1.Param)('niveau')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id de la note'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully updated.',
        type: update_note_dto_1.UpdateNoteDto,
    }),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for updating  a note' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_note_dto_1.UpdateNoteDto]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id note'
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  one note',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "remove", null);
NotesController = __decorate([
    (0, common_1.Controller)('notes'),
    (0, swagger_1.ApiTags)("notes"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map
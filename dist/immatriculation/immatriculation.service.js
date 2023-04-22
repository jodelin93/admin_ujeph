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
exports.ImmatriculationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abstract_service_1 = require("../commons/abstract.service");
const Repository_1 = require("typeorm/repository/Repository");
const immatriculation_entity_1 = require("./entities/immatriculation.entity");
let ImmatriculationService = class ImmatriculationService extends abstract_service_1.AbstracService {
    constructor(immatriculationRepo) {
        super(immatriculationRepo);
        this.immatriculationRepo = immatriculationRepo;
    }
    async createImmatriculation(faculteId, studentId, createImmatriculationDto) {
        const immatriculationSaved = await this.immatriculationRepo.findOne({ where: {
                faculteId, studentId, annee: createImmatriculationDto.annee
            } });
        if (immatriculationSaved) {
            throw new common_1.BadRequestException("Etudiant deja immatricule pour cette Faculte");
        }
        const immatriculationData = Object.assign({ faculteId, studentId }, createImmatriculationDto);
        return this.immatriculationRepo.save(immatriculationData);
    }
    async findOneEtudiant(id) {
        const immatriculationSaved = await this.immatriculationRepo.find({ where: { studentId: id } });
        if (!immatriculationSaved) {
            throw new common_1.BadRequestException('no student with this ID');
        }
        return immatriculationSaved;
    }
};
ImmatriculationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(immatriculation_entity_1.Immatriculation)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], ImmatriculationService);
exports.ImmatriculationService = ImmatriculationService;
//# sourceMappingURL=immatriculation.service.js.map
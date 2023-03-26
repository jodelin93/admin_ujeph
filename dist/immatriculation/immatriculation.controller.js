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
let ImmatriculationController = class ImmatriculationController {
    constructor(immatriculationService) {
        this.immatriculationService = immatriculationService;
    }
    create(createImmatriculationDto) {
        return this.immatriculationService.create(createImmatriculationDto);
    }
    findAll() {
        return this.immatriculationService.findAll();
    }
    findOne(id) {
        return this.immatriculationService.findOne(+id);
    }
    update(id, updateImmatriculationDto) {
        return this.immatriculationService.update(+id, updateImmatriculationDto);
    }
    remove(id) {
        return this.immatriculationService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_immatriculation_dto_1.CreateImmatriculationDto]),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImmatriculationController.prototype, "findOne", null);
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
    __metadata("design:paramtypes", [immatriculation_service_1.ImmatriculationService])
], ImmatriculationController);
exports.ImmatriculationController = ImmatriculationController;
//# sourceMappingURL=immatriculation.controller.js.map
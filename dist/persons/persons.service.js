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
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const person_entity_1 = require("./entities/person.entity");
let PersonsService = class PersonsService {
    constructor(personRepo) {
        this.personRepo = personRepo;
    }
    async create(createPersonDto) {
        try {
            return await this.personRepo.save(createPersonDto);
        }
        catch (error) {
            throw new common_2.BadRequestException(error);
        }
    }
    async findOnePersonByEmail(email) {
        return await this.personRepo.findOne({ where: { email } });
    }
    async findOne(uuid) {
        const person = await this.personRepo.findOne({ where: { uuid } });
        if (!person) {
            throw new common_1.NotFoundException(`person with id ${uuid} does not found`);
        }
        return person;
    }
    async update(uuid, updatePersonDto) {
        const onePerson = await this.findOne(uuid);
        if (!onePerson) {
            throw new common_1.NotFoundException(`person with id ${uuid} does not found`);
        }
        const id = onePerson.id;
        const person = await this.personRepo.preload(Object.assign({ id }, updatePersonDto));
        return await this.personRepo.save(person);
    }
    async remove(uuid) {
        const person = await this.findOne(uuid);
        await this.personRepo.remove(person);
    }
};
PersonsService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(person_entity_1.Person)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonsService);
exports.PersonsService = PersonsService;
//# sourceMappingURL=persons.service.js.map
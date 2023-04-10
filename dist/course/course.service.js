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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const abstract_service_1 = require("../commons/abstract.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const courses_entity_1 = require("./entities/courses.entity");
let CourseService = class CourseService extends abstract_service_1.AbstracService {
    constructor(courseRepo) {
        super(courseRepo);
        this.courseRepo = courseRepo;
    }
    async create(createCourseDto) {
        const course = await this.courseRepo.findOne({ where: { nom_cours: createCourseDto.nom_cours } });
        if (course) {
            throw new common_1.BadRequestException("cours Existant");
        }
        return await this.courseRepo.save(createCourseDto);
    }
    async findOneCourse(id, relations = []) {
        return await super.findOne({ id }, relations);
    }
    async update(id, updateCourseDto) {
        const courseSaved = await this.courseRepo.preload(Object.assign({ id }, updateCourseDto));
        return await this.courseRepo.save(courseSaved);
    }
    async remove(id) {
        return await this.courseRepo.delete(id);
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(courses_entity_1.Courses)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map
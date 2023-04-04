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
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const course_service_1 = require("./course.service");
const create_course_dto_1 = require("./dto/create-course.dto");
const update_course_dto_1 = require("./dto/update-course.dto");
const swagger_1 = require("@nestjs/swagger");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    create(createCourseDto) {
        return this.courseService.create(createCourseDto);
    }
    findAll(page) {
        return this.courseService.findAll(page, []);
    }
    findOne(id) {
        return this.courseService.findOne(+id);
    }
    update(id, updateCourseDto) {
        return this.courseService.update(+id, updateCourseDto);
    }
    remove(id) {
        return this.courseService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a course' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: create_course_dto_1.CreateCourseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_dto_1.CreateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        type: create_course_dto_1.CreateCourseDto,
        description: 'Operation pour recupperer tous les cours',
        isArray: true,
    }),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id cours'
    }),
    (0, swagger_1.ApiResponse)({ type: create_course_dto_1.CreateCourseDto }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one courses',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id cours'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully updated.',
        type: create_course_dto_1.CreateCourseDto,
    }),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for updating  a cours' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_course_dto_1.UpdateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'id cours'
    }),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for deleting  one cours',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "remove", null);
CourseController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Cours'),
    (0, common_1.Controller)('course'),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map
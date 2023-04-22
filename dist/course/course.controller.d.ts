import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    create(createCourseDto: CreateCourseDto): Promise<CreateCourseDto & import("./entities/courses.entity").Courses>;
    findAll(page?: number): Promise<import("../commons/paginate-result.interface").PaginateResult>;
    findFilterAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<import("./entities/courses.entity").Courses>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

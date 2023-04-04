import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm';
import { Courses } from './entities/courses.entity';
export declare class CourseService extends AbstracService {
    private courseRepo;
    constructor(courseRepo: Repository<Courses>);
    create(createCourseDto: CreateCourseDto): Promise<CreateCourseDto & Courses>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<Courses>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

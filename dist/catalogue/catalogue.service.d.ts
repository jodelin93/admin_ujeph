import { AbstracService } from 'src/commons/abstract.service';
import { Catalogue } from './entities/catalogue.entity';
import { Repository } from 'typeorm';
import { FaculteService } from 'src/faculte/faculte.service';
import { TeachersService } from 'src/teachers/teachers.service';
import { CourseService } from 'src/course/course.service';
export declare class CatalogueService extends AbstracService {
    private catalogueRepo;
    private readonly faculteService;
    private readonly teacherService;
    private readonly courseService;
    constructor(catalogueRepo: Repository<Catalogue>, faculteService: FaculteService, teacherService: TeachersService, courseService: CourseService);
    create(data: any): Promise<Catalogue>;
    updateTeacher(id: number, teacherId: number): Promise<Catalogue>;
}

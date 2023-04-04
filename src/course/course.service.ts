import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AbstracService } from 'src/commons/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from './entities/courses.entity';

@Injectable()
export class CourseService extends AbstracService{
  constructor(
    @InjectRepository(Courses) private courseRepo: Repository<Courses>,
  ) {
    super(courseRepo);
  }
  async create(createCourseDto: CreateCourseDto) {
    const course = await this.courseRepo.findOne({ where: { nom_cours: createCourseDto.nom_cours } })
    if (course) {
      throw new BadRequestException("cours Existant");
    }
    return  await this.courseRepo.save(createCourseDto)
  }



  async findOne(id: number) {
    return await super.findOne({id});
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const courseSaved = await this.courseRepo.preload({ id, ...updateCourseDto });
    return   await this.courseRepo.save(courseSaved);
  }

  async remove(id: number) {
    return await this.courseRepo.delete(id)
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { AbstracService } from 'src/commons/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogue } from './entities/catalogue.entity';
import { Repository } from 'typeorm';
import { FaculteService } from 'src/faculte/faculte.service';
import { TeachersService } from 'src/teachers/teachers.service';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class CatalogueService extends AbstracService {

 

  constructor(@InjectRepository(Catalogue) private catalogueRepo: Repository<Catalogue>,
    private readonly faculteService: FaculteService,
    private readonly teacherService: TeachersService,
    private readonly courseService:CourseService
  ) {
    super(catalogueRepo);
  }

  async create(data: any) {

    
    const faculte = await this.faculteService.findOne(data.faculteId);
    const teacher = await this.teacherService.findOne({ id: data.teacherId });
    const courses = await this.courseService.findOne({ id: data.coursesId });
    const catalogue = this.catalogueRepo.create({
      semestre: data.semestre,
      matiere_base:data.matiere_base,
      note_passage:data.note_passage,
      annee_academique:data.annee_academique,
      teacher,courses,faculte
    });

    if (faculte && teacher && courses) {
    const catalogueSaved = await this.catalogueRepo.findOne({ where: { coursesId: courses.id,semestre:data.semestre } })
    if (catalogueSaved) {
      throw new BadRequestException("ce cours a deja ete attribuer a cette faculte pour ce meme semestre")
    }
    return await this.catalogueRepo.save(catalogue)
    } else {
      throw new BadRequestException("toutes les ressources doivent disponibles dans la base")
    }
  
  }



  async updateTeacher(id: number, teacherId: number) {
    const teacher = await this.teacherService.findOne({ id: teacherId });
    const catalogue = await this.catalogueRepo.preload({ id });
    catalogue.teacher = teacher;
    return await this.catalogueRepo.save(catalogue);
  }

  async findAllFilter(faculteId: number, semestre: string, annee_academique: string) {
    const faculte = await this.faculteService.findOne(faculteId);
    console.log(faculte);
    
    return await  this.catalogueRepo.find({where:{
      faculteId:faculte.faculteId,semestre,annee_academique
    }})
    
    
  }

}

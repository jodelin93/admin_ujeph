import { Module } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { CatalogueController } from './catalogue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogue } from './entities/catalogue.entity';
import { FaculteModule } from 'src/faculte/faculte.module';
import { CourseModule } from 'src/course/course.module';
import { TeachersModule } from 'src/teachers/teachers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Catalogue]),FaculteModule,CourseModule,TeachersModule],
  controllers: [CatalogueController],
  providers: [CatalogueService]
})
export class CatalogueModule {}

import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Note} from "./entities/note.entity";
import {FaculteModule} from "../faculte/faculte.module";
import {StudentsModule} from "../students/students.module";
import {CourseModule} from "../course/course.module";

@Module({
  imports: [TypeOrmModule.forFeature([Note]),FaculteModule,StudentsModule,CourseModule],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}

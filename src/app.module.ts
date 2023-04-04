/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './commons/common.module';
import { FaculteModule } from './faculte/faculte.module';
import { ImmatriculationModule } from './immatriculation/immatriculation.module';
import { CourseModule } from './course/course.module';




@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize:true
    }),
    EmployeesModule,CourseModule,
    StudentsModule,ImmatriculationModule,TeachersModule,UsersModule, AuthModule,CommonModule, FaculteModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

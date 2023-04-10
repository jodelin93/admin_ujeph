import { Courses } from "src/course/entities/courses.entity";
import { Faculte } from "src/faculte/entities/faculte.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Catalogue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    semestre: string;

    @Column({default:1,type:"tinyint"})
    status: number

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Courses, (courses) => courses.catalogue,{ eager: true })
    courses: Courses[];

    @ManyToOne(() => Faculte, (faculte) => faculte.catalogue, { eager: true })
    faculte: Faculte[];

    @ManyToOne(() => Teacher, (teacher) => teacher.catalogue,{ eager: true })
    teacher: Teacher[];
}

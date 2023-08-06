import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Catalogue} from "../../catalogue/entities/catalogue.entity";
import {Courses} from "../../course/entities/courses.entity";
import {Student} from "../../students/entities/student.entity";
import {Faculte} from "../../faculte/entities/faculte.entity";
@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    coursesId: string;

    @Column()
    etudiantId: string;

    @Column()
    faculteId: string;

    @Column()
    semestre: string;

    @Column()
    notes: string;

    @Column({nullable:true})
    remarques: string;

    @Column({nullable:false})
    annee_academique:string;

    @Column({nullable:false})
    niveau:string;

    @Column({default:false,nullable:false})
    isreprise:boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Catalogue, (catalogue) => catalogue.courses)
    catalogue: Catalogue;

    @ManyToOne(() => Courses, (courses) => courses.notes,{ eager: true })
    courses: Courses[];

    @ManyToOne(() => Student, (student) => student.notes,{ eager: true })
    etudiant:Student[];

    @ManyToOne(() => Faculte, (faculte) => faculte.notes,{ eager: true })
    faculte:Faculte[];
}

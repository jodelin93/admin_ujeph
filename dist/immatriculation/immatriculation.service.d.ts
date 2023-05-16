import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm/repository/Repository';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { Immatriculation } from './entities/immatriculation.entity';
export declare class ImmatriculationService extends AbstracService {
    private immatriculationRepo;
    constructor(immatriculationRepo: Repository<Immatriculation>);
    createImmatriculation(faculteId: number, studentId: number, createImmatriculationDto: CreateImmatriculationDto): Promise<{
        vacation: string;
        niveau: string;
        degree: import("../faculte/entities/faculte.entity").DEGREE;
        annee: string;
        faculteId: number;
        studentId: number;
    } & Immatriculation>;
    findOneEtudiant(id: number): Promise<Immatriculation[]>;
    findOneFaculte(id: number): Promise<Immatriculation[]>;
}

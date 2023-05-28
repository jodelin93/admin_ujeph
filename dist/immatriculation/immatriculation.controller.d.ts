import { ImmatriculationService } from './immatriculation.service';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';
export declare class ImmatriculationController {
    private readonly immatriculationService;
    constructor(immatriculationService: ImmatriculationService);
    create(studentId: number, faculteId: number, createImmatriculationDto: CreateImmatriculationDto): Promise<{
        vacation: string;
        niveau: string;
        degree: import("../faculte/entities/faculte.entity").DEGREE;
        annee: string;
        faculteId: number;
        studentId: number;
    } & import("./entities/immatriculation.entity").Immatriculation>;
    findOne(id: number): Promise<import("./entities/immatriculation.entity").Immatriculation[]>;
    findOneFaculte(id: number): Promise<any>;
    update(id: string, updateImmatriculationDto: UpdateImmatriculationDto): Promise<any>;
    remove(id: string): Promise<any>;
}

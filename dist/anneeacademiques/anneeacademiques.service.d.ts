import { CreateAnneeacademiqueDto } from './dto/create-anneeacademique.dto';
import { UpdateAnneeacademiqueDto } from './dto/update-anneeacademique.dto';
import { Anneeacademique } from "./entities/anneeacademique.entity";
import { Repository } from 'typeorm';
export declare class AnneeacademiquesService {
    private anneeRepo;
    constructor(anneeRepo: Repository<Anneeacademique>);
    create(createAnneeacademiqueDto: CreateAnneeacademiqueDto): Promise<CreateAnneeacademiqueDto & Anneeacademique>;
    findAll(): Promise<Anneeacademique[]>;
    findOne(id: number): Promise<Anneeacademique>;
    update(id: number, updateAnneeacademiqueDto: UpdateAnneeacademiqueDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

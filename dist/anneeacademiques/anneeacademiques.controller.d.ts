import { AnneeacademiquesService } from './anneeacademiques.service';
import { CreateAnneeacademiqueDto } from './dto/create-anneeacademique.dto';
import { UpdateAnneeacademiqueDto } from './dto/update-anneeacademique.dto';
export declare class AnneeacademiquesController {
    private readonly anneeacademiquesService;
    constructor(anneeacademiquesService: AnneeacademiquesService);
    create(createAnneeacademiqueDto: CreateAnneeacademiqueDto): Promise<CreateAnneeacademiqueDto & import("./entities/anneeacademique.entity").Anneeacademique>;
    findAll(): Promise<import("./entities/anneeacademique.entity").Anneeacademique[]>;
    findOne(id: number): Promise<import("./entities/anneeacademique.entity").Anneeacademique>;
    update(id: number, updateAnneeacademiqueDto: UpdateAnneeacademiqueDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

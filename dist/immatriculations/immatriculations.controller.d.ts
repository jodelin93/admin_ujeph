import { ImmatriculationsService } from './immatriculations.service';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';
export declare class ImmatriculationsController {
    private readonly immatriculationsService;
    constructor(immatriculationsService: ImmatriculationsService);
    create(createImmatriculationDto: CreateImmatriculationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateImmatriculationDto: UpdateImmatriculationDto): string;
    remove(id: string): string;
}

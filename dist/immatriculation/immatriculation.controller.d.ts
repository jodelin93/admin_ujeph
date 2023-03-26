import { ImmatriculationService } from './immatriculation.service';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';
export declare class ImmatriculationController {
    private readonly immatriculationService;
    constructor(immatriculationService: ImmatriculationService);
    create(createImmatriculationDto: CreateImmatriculationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateImmatriculationDto: UpdateImmatriculationDto): string;
    remove(id: string): string;
}

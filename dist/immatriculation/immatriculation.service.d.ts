import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';
export declare class ImmatriculationService {
    create(createImmatriculationDto: CreateImmatriculationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateImmatriculationDto: UpdateImmatriculationDto): string;
    remove(id: number): string;
}

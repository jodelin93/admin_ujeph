import { PartialType } from '@nestjs/swagger';
import { CreateImmatriculationDto } from './create-immatriculation.dto';

export class UpdateImmatriculationDto extends PartialType(CreateImmatriculationDto) {}

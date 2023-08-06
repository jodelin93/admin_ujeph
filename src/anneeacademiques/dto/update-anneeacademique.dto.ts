import { PartialType } from '@nestjs/swagger';
import { CreateAnneeacademiqueDto } from './create-anneeacademique.dto';

export class UpdateAnneeacademiqueDto extends PartialType(CreateAnneeacademiqueDto) {}

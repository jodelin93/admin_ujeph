import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { DEGREE } from "src/faculte/entities/faculte.entity";

export class CreateImmatriculationDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'vacation de la faculte' })
    vacation: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'niveau de la faculte' })
    niveau: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'degre de la faculte' })
    degree: DEGREE;
    @IsNotEmpty()
    @ApiProperty({ description: 'annee academique' })
    annee: string;
}

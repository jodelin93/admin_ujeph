
import { CreateNoteDto } from './create-note.dto';
import {IsNotEmpty, IsOptional} from "class-validator";
import {ApiProperty, PartialType} from "@nestjs/swagger";

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    @IsNotEmpty()
    @ApiProperty({ description: 'precise si oui ou non la note est une reprise ou pas' })
    isreprise: boolean;

    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ description: 'semestre' })
    semestre: string;

    @IsNotEmpty()
    @ApiProperty({ description: 'note pour l\'etudiant' })
    notes: string;

    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ description: 'remarque sur la notes' })
    remarques: string;

    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ description: 'annee academique' })
    annee_academique: string;
}

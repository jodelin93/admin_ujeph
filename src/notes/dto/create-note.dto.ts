import { IsNotEmpty, IsOptional} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class CreateNoteDto {
    @IsNotEmpty()
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
    @ApiProperty({ description: 'annee academique' })
    annee_academique: string;



}

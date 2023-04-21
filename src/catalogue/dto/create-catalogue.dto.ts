import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCatalogueDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'semestre pour lequel on veut attribuer' })
    semestre: string;

    @IsNotEmpty()
    @ApiProperty({ description: "preciser si c'est une matiere de base" })
    matiere_base: number

    @IsNotEmpty()
    @ApiProperty({ description: 'Note de passage de ce cours pour cette faculte' })
    note_passage: number

    @IsNotEmpty()
    @ApiProperty({ description: 'annee academique' })
    annee_academique:string
}

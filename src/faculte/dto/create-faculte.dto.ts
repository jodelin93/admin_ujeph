import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsPositive } from "class-validator";
import { DEGREE } from "../entities/faculte.entity";

export class CreateFaculteDto {

    @IsNotEmpty()
    @ApiProperty({ description: 'nom de la faculte' })
    nom_faculte: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'niveau de la faculte' })
    degree: DEGREE;
    @IsNotEmpty()
    @ApiProperty({ description: 'le nombre annee que va durer le cycle' })
    duree: number;
    @ApiProperty({ description: 'note de passage pour la faculte' })
        
    @IsPositive() 
    @IsOptional()    
    note_de_passage: number;
    @ApiProperty({ description: 'nombre de matiere pour empecher le ssage en niveau superieur' })
    @IsPositive()
    @IsOptional()    
    nombre_matiere: number;

    @IsOptional()
    @ApiProperty({ description: 'description de la faculte' })
    description: string;
}

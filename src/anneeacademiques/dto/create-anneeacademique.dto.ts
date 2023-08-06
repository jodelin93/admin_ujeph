
import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateAnneeacademiqueDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'anne academique' })
    annee_academique:string;
}

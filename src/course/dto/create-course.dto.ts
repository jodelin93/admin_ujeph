import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCourseDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'code du cours' })
    code_cours: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'nom du cours' })
    nom_cours: string;
    @IsNotEmpty()
    @IsOptional() 
    @ApiProperty({ description: 'description du cours' })
    description: string;
}

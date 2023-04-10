import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCatalogueDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'semestre pour lequel on veut attribuer' })
    semestre: string;
}

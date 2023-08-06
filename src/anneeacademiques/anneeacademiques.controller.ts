import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { AnneeacademiquesService } from './anneeacademiques.service';
import { CreateAnneeacademiqueDto } from './dto/create-anneeacademique.dto';
import { UpdateAnneeacademiqueDto } from './dto/update-anneeacademique.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateCatalogueDto} from "../catalogue/dto/create-catalogue.dto";
import {CreateEmployeeDto} from "../employees/dto/create-employee.dto";

@Controller('anneeacademiques')
@ApiBearerAuth()
@ApiTags('anneeacademiques')
export class AnneeacademiquesController {
  constructor(private readonly anneeacademiquesService: AnneeacademiquesService) {}

  @Post()
  @ApiOperation({ description: 'this is the endpoint for Creating  a annee academqiue' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateAnneeacademiqueDto,
  })
  create(@Body() createAnneeacademiqueDto: CreateAnneeacademiqueDto) {
    return this.anneeacademiquesService.create(createAnneeacademiqueDto);
  }

  @Get()
  @ApiOperation({
    description: 'this is the endpoint for retrieving all the annee academqiues',
  })
  @ApiResponse({
    type: CreateAnneeacademiqueDto,
    description: 'Operation pour recupperer toutes les annees académiques',
    isArray: true,
  })
  findAll() {
    return this.anneeacademiquesService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id annee academique',
  })
  @ApiResponse({ type: CreateAnneeacademiqueDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one annee academqiue',
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.anneeacademiquesService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id annee academique ',
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: UpdateAnneeacademiqueDto,
  })
  @ApiOperation({
    description: 'this is the endpoint for updating  annee academqiue',
  })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateAnneeacademiqueDto: UpdateAnneeacademiqueDto) {
    return this.anneeacademiquesService.update(+id, updateAnneeacademiqueDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id annee academique',
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one annee academqiue',
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.anneeacademiquesService.remove(id);
  }
}

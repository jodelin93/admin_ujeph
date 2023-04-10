import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';


@Controller('catalogue')
@ApiBearerAuth()
@ApiTags('Catalogues')
export class CatalogueController {
  constructor(private readonly catalogueService: CatalogueService) {}

  @Post()
  @ApiOperation({ description: 'this is the endpoint for Creating  a Catalogue' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateCatalogueDto,
  })
  create(
    @Query('teacherId') teacherId: number,
    @Query('faculteId') faculteId: number,
    @Query('coursesId') coursesId: number,
    @Body() createCatalogueDto: CreateCatalogueDto) {
    
    return this.catalogueService.create(
      {
        teacherId,
        faculteId,
        coursesId,
        ...createCatalogueDto
      });
  }

  @Get()
  findAll(@Query('page', ParseIntPipe) page?: number) {
    return this.catalogueService.findAll(page,[]);
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.catalogueService.findOne(id,['courses','faculte','teacher']);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'this is the endpoint for updating catalogue',
  })
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id catalogue'
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: CreateCatalogueDto,
  })
  @ApiOperation({ description: 'this is the endpoint for updating  a catalogue' })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCatalogueDto: UpdateCatalogueDto) {
    return this.catalogueService.update(+id, updateCatalogueDto);
  }

  @Patch('updateprofesseur/:id')
  @ApiOperation({
    description: 'this is the endpoint for updating a teacher at catalogue',
  })
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id catalogue'
  })
  
  @ApiOperation({ description: 'this is the endpoint for updating  a teacher catalogue' }) 
  updateTeacher(@Param('id',ParseIntPipe) id: number,@Query('teacherId', ParseIntPipe) teacherId: number) {
    return this.catalogueService.updateTeacher(id, teacherId);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id catalogue'
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one catalogue',
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.catalogueService.remove(id);
  }
}

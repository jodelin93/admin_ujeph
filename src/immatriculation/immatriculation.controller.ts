import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImmatriculationService } from './immatriculation.service';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('immatriculation')
@ApiBearerAuth()
@ApiTags('Immatriculation')
export class ImmatriculationController {
  constructor(private readonly immatriculationService: ImmatriculationService) {}

  @Post(':studentId/:faculteId')
  @ApiParam({
    name: 'studentId',
      type: 'number',
    description:'id etudiant'
  })
  @ApiParam({
    name: 'faculteId',
      type: 'number',
    description:'id faculte'
  })
  @ApiOperation({ description: 'this is the endpoint for Creating  a immatriculation' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateImmatriculationDto,
  })
  create(@Param('studentId') studentId: number,
    @Param('faculteId') faculteId: number,
    @Body() createImmatriculationDto: CreateImmatriculationDto) {
    console.log(studentId);
    console.log(faculteId);
    return this.immatriculationService.createImmatriculation(faculteId,studentId,createImmatriculationDto );
  }

  @Get()
  findAll() {
    //return this.immatriculationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.immatriculationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImmatriculationDto: UpdateImmatriculationDto) {
    return this.immatriculationService.update(+id, updateImmatriculationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.immatriculationService.remove(+id);
  }
}

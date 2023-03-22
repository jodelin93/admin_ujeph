import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImmatriculationService } from './immatriculation.service';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';

@Controller('immatriculation')
export class ImmatriculationController {
  constructor(private readonly immatriculationService: ImmatriculationService) {}

  @Post()
  create(@Body() createImmatriculationDto: CreateImmatriculationDto) {
    return this.immatriculationService.create(createImmatriculationDto);
  }

  @Get()
  findAll() {
    return this.immatriculationService.findAll();
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

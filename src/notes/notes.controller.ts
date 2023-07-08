import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateFaculteDto} from "../faculte/dto/create-faculte.dto";

@Controller('notes')
@ApiTags("notes")
@ApiBearerAuth()
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('/:id_etudiant/:id_cours/:id_faculte')
  @ApiParam({
    name: 'id_etudiant',
    type: 'number',
    description:'id etudiant'
  })
  @ApiParam({
    name: 'id_cours',
    type: 'number',
    description:'id cours'
  })
  @ApiParam({
    name: 'id_faculte',
    type: 'number',
    description:'id faculte'
  })
  @ApiOperation({ description: 'this is the endpoint for Creating  a note' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateNoteDto,
  })
  create(
      @Body() createNoteDto: CreateNoteDto,
      @Param('id_etudiant',ParseIntPipe) id_etudiant: number,
      @Param('id_cours',ParseIntPipe) id_cours: number,
      @Param('id_faculte',ParseIntPipe) id_faculte: number
  )

  {
    return this.notesService.create(createNoteDto,id_etudiant,id_cours,id_faculte);
  }

  @Get()
  @ApiOperation({
    description: 'this is the endpoint for retrieving all  notes',
  })
  @ApiResponse({
    type: CreateNoteDto,
    description: 'Operation pour recupperer toutes les notes',
    isArray: true,
  })
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id_etudiant/:semestre/:annee_academique')
  @ApiParam({
    name: 'id_etudiant',
    type: 'number',
    description:'id etudiant'
  })
  @ApiParam({
    name: 'semestre',
    type: 'string',
    description:'semestre'
  })
  @ApiParam({
    name: 'annee_academique',
    type: 'string',
    description:'annee_academique'
  })
  @ApiResponse({ type: CreateFaculteDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one faculte',
  })
  findOne(
      @Param('id_etudiant',ParseIntPipe) id_etudiant: string,
      @Param('semestre') semestre: string,
      @Param('annee_academique') annee_academique: string
  ) {
    return this.notesService.findOne(id_etudiant,semestre,annee_academique);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description:'id de la note'
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: UpdateNoteDto,
  })
  @ApiOperation({ description: 'this is the endpoint for updating  a note' })
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description:'id note'
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one note',
  })
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}

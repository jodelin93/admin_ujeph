import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Cours')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @ApiOperation({ description: 'this is the endpoint for Creating  a course' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateCourseDto,
  })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  @ApiResponse({
    type: CreateCourseDto,
    description: 'Operation pour recupperer tous les cours',
    isArray: true,
  })
  findAll(@Query('page', ParseIntPipe) page?: number) {
    return this.courseService.findAll(page, ['catalogue']);
  }

  @Get('filter/all')
  @ApiOperation({
    description: 'this is the endpoint for retrieving all  students without filter',
  })
  @ApiResponse({
    type: CreateCourseDto,
    description: 'Operation pour recupperer tous les cours sans filtrer',
    isArray: true,
  })
  findFilterAll() {
    return this.courseService.find();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id cours'
  })
  @ApiResponse({ type: CreateCourseDto })
  @ApiOperation({
    description: 'this is the endpoint for retrieving  one courses',
  })
  findOne(@Param('id', ParseIntPipe
  ) id: number) {
    return this.courseService.findOneCourse(+id, ['catalogue']);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id cours'
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: CreateCourseDto,
  })
  @ApiOperation({ description: 'this is the endpoint for updating  a cours' })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
      type: 'number',
    description:'id cours'
  })
  @ApiOperation({
    description: 'this is the endpoint for deleting  one cours',
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.courseService.remove(+id);
  }
}

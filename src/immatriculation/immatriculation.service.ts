import { Injectable } from '@nestjs/common';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';

@Injectable()
export class ImmatriculationService {
  create(createImmatriculationDto: CreateImmatriculationDto) {
    return 'This action adds a new immatriculation';
  }

  findAll() {
    return `This action returns all immatriculation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} immatriculation`;
  }

  update(id: number, updateImmatriculationDto: UpdateImmatriculationDto) {
    return `This action updates a #${id} immatriculation`;
  }

  remove(id: number) {
    return `This action removes a #${id} immatriculation`;
  }
}

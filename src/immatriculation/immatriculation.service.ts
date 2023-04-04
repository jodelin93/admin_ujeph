import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm/repository/Repository';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { UpdateImmatriculationDto } from './dto/update-immatriculation.dto';
import { Immatriculation } from './entities/immatriculation.entity';

@Injectable()
export class ImmatriculationService extends AbstracService{

  constructor(@InjectRepository(Immatriculation) private immatriculationRepo :Repository<Immatriculation>) {
    super(immatriculationRepo)
  }

   createImmatriculation(faculteId:number,studentId:number,createImmatriculationDto: CreateImmatriculationDto) {
      const immatriculationData={faculteId,studentId,...createImmatriculationDto}
    
    return  this.immatriculationRepo.save(immatriculationData);
  }

  // findAll() {
  //   return `This action returns all immatriculation`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} immatriculation`;
  // }

  // update(id: number, updateImmatriculationDto: UpdateImmatriculationDto) {
  //   return `This action updates a #${id} immatriculation`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} immatriculation`;
  // }
}

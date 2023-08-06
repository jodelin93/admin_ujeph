import { Injectable } from '@nestjs/common';
import { CreateAnneeacademiqueDto } from './dto/create-anneeacademique.dto';
import { UpdateAnneeacademiqueDto } from './dto/update-anneeacademique.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Anneeacademique} from "./entities/anneeacademique.entity";
import { Repository } from 'typeorm';

@Injectable()
export class AnneeacademiquesService {
  constructor(
      @InjectRepository(Anneeacademique) private anneeRepo:Repository<Anneeacademique>
  ) {
  }
  async create(createAnneeacademiqueDto: CreateAnneeacademiqueDto) {
    return this.anneeRepo.save(createAnneeacademiqueDto);
  }

  async findAll() {
      return this.anneeRepo.find();
  }



  async findOne(id: number) {
   return this.anneeRepo.findOne({where:{id}});
  }

  async update(id: number, updateAnneeacademiqueDto: UpdateAnneeacademiqueDto) {
      return this.anneeRepo.update(id,updateAnneeacademiqueDto);
  }


 async  remove(id: number) {
   return this.anneeRepo.delete(id);
  }
}

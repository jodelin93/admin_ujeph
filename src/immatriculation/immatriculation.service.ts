import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm/repository/Repository';
import { CreateImmatriculationDto } from './dto/create-immatriculation.dto';
import { Immatriculation } from './entities/immatriculation.entity';

@Injectable()
export class ImmatriculationService extends AbstracService {
  constructor(
    @InjectRepository(Immatriculation)
    private immatriculationRepo: Repository<Immatriculation>,
  ) {
    super(immatriculationRepo);
  }

  async createImmatriculation(
    faculteId: number,
    studentId: number,
    createImmatriculationDto: CreateImmatriculationDto,
  ) {
    const immatriculationSaved = await this.immatriculationRepo.findOne({
      where: {
        faculteId,
        studentId,
        annee: createImmatriculationDto.annee,
      },
    });

    if (immatriculationSaved) {
      throw new BadRequestException(
        'Etudiant deja immatricule pour cette Faculte',
      );
    }

    const immatriculationData = {
      faculteId,
      studentId,
      ...createImmatriculationDto,
    };

    return this.immatriculationRepo.save(immatriculationData);
  }

  async findOneEtudiant(id: number) {
    const immatriculationSaved = await this.immatriculationRepo.find({
      where: { studentId: id },
    });

    if (!immatriculationSaved) {
      throw new BadRequestException('no student with this ID');
    }
    return immatriculationSaved;
  }
  async findOneFaculte(id: number) {
    const immatriculationSaved = await this.immatriculationRepo.find({
      where: { faculteId: id },
    });

    if (!immatriculationSaved) {
      throw new BadRequestException('no faculte with this ID');
    }
    return immatriculationSaved;
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

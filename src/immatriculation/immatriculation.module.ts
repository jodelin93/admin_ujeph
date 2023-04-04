import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImmatriculationService } from './immatriculation.service';
import { ImmatriculationController } from './immatriculation.controller';
import { Immatriculation } from './entities/immatriculation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Immatriculation])],
  controllers: [ImmatriculationController],
  providers: [ImmatriculationService]
})
export class ImmatriculationModule {}

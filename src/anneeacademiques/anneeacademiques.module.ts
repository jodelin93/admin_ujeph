import { Module } from '@nestjs/common';
import { AnneeacademiquesService } from './anneeacademiques.service';
import { AnneeacademiquesController } from './anneeacademiques.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Anneeacademique} from "./entities/anneeacademique.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Anneeacademique])],
  controllers: [AnneeacademiquesController],
  providers: [AnneeacademiquesService]
})
export class AnneeacademiquesModule {}

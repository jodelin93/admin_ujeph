import { Module } from '@nestjs/common';
import { ImmatriculationService } from './immatriculation.service';
import { ImmatriculationController } from './immatriculation.controller';

@Module({
  controllers: [ImmatriculationController],
  providers: [ImmatriculationService]
})
export class ImmatriculationModule {}

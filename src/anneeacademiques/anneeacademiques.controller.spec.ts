import { Test, TestingModule } from '@nestjs/testing';
import { AnneeacademiquesController } from './anneeacademiques.controller';
import { AnneeacademiquesService } from './anneeacademiques.service';

describe('AnneeacademiquesController', () => {
  let controller: AnneeacademiquesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnneeacademiquesController],
      providers: [AnneeacademiquesService],
    }).compile();

    controller = module.get<AnneeacademiquesController>(AnneeacademiquesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AnneeacademiquesService } from './anneeacademiques.service';

describe('AnneeacademiquesService', () => {
  let service: AnneeacademiquesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnneeacademiquesService],
    }).compile();

    service = module.get<AnneeacademiquesService>(AnneeacademiquesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

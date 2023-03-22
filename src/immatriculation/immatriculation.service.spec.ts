import { Test, TestingModule } from '@nestjs/testing';
import { ImmatriculationService } from './immatriculation.service';

describe('ImmatriculationService', () => {
  let service: ImmatriculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmatriculationService],
    }).compile();

    service = module.get<ImmatriculationService>(ImmatriculationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

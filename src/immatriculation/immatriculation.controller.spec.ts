import { Test, TestingModule } from '@nestjs/testing';
import { ImmatriculationController } from './immatriculation.controller';
import { ImmatriculationService } from './immatriculation.service';

describe('ImmatriculationController', () => {
  let controller: ImmatriculationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmatriculationController],
      providers: [ImmatriculationService],
    }).compile();

    controller = module.get<ImmatriculationController>(ImmatriculationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

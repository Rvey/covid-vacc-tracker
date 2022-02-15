import { Test, TestingModule } from '@nestjs/testing';
import { AppointementsService } from './appointements.service';

describe('AppointementsService', () => {
  let service: AppointementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointementsService],
    }).compile();

    service = module.get<AppointementsService>(AppointementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { WhiskeyService } from './whiskey.service';

describe('WhiskeyService', () => {
  let service: WhiskeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhiskeyService],
    }).compile();

    service = module.get<WhiskeyService>(WhiskeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

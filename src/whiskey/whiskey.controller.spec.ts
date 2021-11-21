import { Test, TestingModule } from '@nestjs/testing';
import { WhiskeyController } from './whiskey.controller';

describe('WhiskeyController', () => {
  let controller: WhiskeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhiskeyController],
    }).compile();

    controller = module.get<WhiskeyController>(WhiskeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

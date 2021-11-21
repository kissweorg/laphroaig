import { Controller, Get, Param } from '@nestjs/common';
import { WhiskeyService } from './whiskey.service';

@Controller('v1')
export class WhiskeyController {
  constructor(private whiskeyService: WhiskeyService) {}
  @Get()
  async getWhiskeys() {
    return this.whiskeyService.getWhiskeys();
  }
  @Get(':id')
  async getWhiskeyById(@Param('id') id: string) {
    return this, this.whiskeyService.getWhiskeyById(id);
  }
}

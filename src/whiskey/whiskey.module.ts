import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WhiskeyController } from './whiskey.controller';
import { Whiskey, WhiskeySchema } from './whiskey.schema';
import { WhiskeyService } from './whiskey.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Whiskey.name, schema: WhiskeySchema }]),
  ],
  controllers: [WhiskeyController],
  providers: [WhiskeyService],
})
export class WhiskeyModule {}

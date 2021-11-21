import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Whiskey, WhiskeyDocument } from './whiskey.schema';

@Injectable()
export class WhiskeyService {
  constructor(
    @InjectModel(Whiskey.name) private whiskeyModel: Model<WhiskeyDocument>,
  ) {}

  async getWhiskeys(): Promise<Whiskey[]> {
    return this.whiskeyModel.find();
  }

  async getWhiskeyById(id: string) {
    return this.whiskeyModel.findById(id);
  }
}

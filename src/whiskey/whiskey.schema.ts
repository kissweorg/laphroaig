import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WhiskeyDocument = Whiskey & Document;

interface Tag {
  title: string;
  count: number;
  normalizedCount: number;
}
@Schema()
export class Whiskey {
  @Prop()
  externalId: number;
  @Prop()
  title: string;
  @Prop()
  region: string;
  @Prop()
  externalImgUrl: string;
  @Prop()
  rating: number;
  @Prop()
  comparables: number[];
  @Prop()
  tags: Tag[];
}

export const WhiskeySchema = SchemaFactory.createForClass(Whiskey);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppointementDocument = Appointement & Document;

@Schema()
export class Appointement {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  date: Date;
}

export const appointementSchema = SchemaFactory.createForClass(Appointement);

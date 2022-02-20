import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppointementDocument = Appointement & Document;

@Schema()
export class Appointement {
  @Prop()
  name: string;
  @Prop()
  age: string;
  @Prop()
  vaccinNumber: String;
  @Prop()
  chronicDisease: string;
  @Prop()
  effected: string;
  @Prop()
  effectedDetails: string;
  @Prop()
  chronicDiseaseDetails: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  email: string;
  @Prop()
  adress: string;
  @Prop()
  cin: string;
  @Prop()
  date: Date;
}


export const appointementSchema = SchemaFactory.createForClass(Appointement);

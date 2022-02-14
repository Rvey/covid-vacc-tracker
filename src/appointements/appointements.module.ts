import { Module } from '@nestjs/common';
import { AppointementsService } from './appointements.service';
import { AppointementsController } from './appointements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Appointement,
  appointementSchema,
} from '../schemas/appointements.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointement.name, schema: appointementSchema },
    ]),
  ],
  controllers: [AppointementsController],
  providers: [AppointementsService],
})
export class AppointementsModule {}

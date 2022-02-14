import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AppointementsModule } from './appointements/appointements.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/covid-vacc-tracke')],
  // imports: [AppointementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

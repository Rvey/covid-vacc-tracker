import { Injectable } from '@nestjs/common';
import { CreateAppointementDto } from './dto/create-appointement.dto';
import { UpdateAppointementDto } from './dto/update-appointement.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Appointement,
  AppointementDocument,
} from '../schemas/appointements.schema';

@Injectable()
export class AppointementsService {
  constructor(
    @InjectModel(Appointement.name)
    private AppointementModel: Model<AppointementDocument>,
  ) {}

  async create(
    createAppointementDto: CreateAppointementDto,
  ): Promise<Appointement> {
    // const createdAppointement = new this.AppointementModel(
    //   CreateAppointementDto,
    // );
    return new this.AppointementModel(createAppointementDto).save();
  }

  findAll() {
    return this.AppointementModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} appointement`;
  }

  update(id: number, updateAppointementDto: UpdateAppointementDto) {
    return `This action updates a #${id} appointement`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointement`;
  }
}

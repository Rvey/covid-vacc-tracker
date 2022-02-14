import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppointementsService } from './appointements.service';
import { CreateAppointementDto } from './dto/create-appointement.dto';
import { UpdateAppointementDto } from './dto/update-appointement.dto';

@Controller('appointements')
export class AppointementsController {
  constructor(private readonly appointementsService: AppointementsService) {}

  @Post()
  create(@Body() createAppointementDto: CreateAppointementDto) {
    return this.appointementsService.create(createAppointementDto);
  }

  @Get()
  findAll() {
    return this.appointementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointementsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointementDto: UpdateAppointementDto,
  ) {
    return this.appointementsService.update(+id, updateAppointementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointementsService.remove(+id);
  }
}

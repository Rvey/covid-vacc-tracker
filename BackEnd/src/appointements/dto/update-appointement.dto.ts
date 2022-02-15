import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointementDto } from './create-appointement.dto';

export class UpdateAppointementDto extends PartialType(CreateAppointementDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerMicroserviceDto } from './create-career-microservice.dto';

export class UpdateCareerMicroserviceDto extends PartialType(CreateCareerMicroserviceDto) {
  id: number;
}

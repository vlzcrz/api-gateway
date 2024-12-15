import { Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CareerMicroserviceService } from './career-microservice.service';
import { CreateCareerMicroserviceDto } from './dto/create-career-microservice.dto';
import { UpdateCareerMicroserviceDto } from './dto/update-career-microservice.dto';
import { SubjectServiceClient } from './Services/Subject/subject.service';
import { CareerServiceClient } from './Services/Career/career.service';

@Controller('career')
export class CareerMicroserviceController {
  constructor(
    private readonly SubjectServiceClient: SubjectServiceClient,
    private readonly CareerServiceClient: CareerServiceClient,
  ) {}

  @Get('subject')
  getExample() {
    return this.SubjectServiceClient.GetAllSubjects();
  }

  @Get()
  getCareers() {
    return this.CareerServiceClient.GetAllCareers();
  }
}

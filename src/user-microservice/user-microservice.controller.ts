import { Controller } from '@nestjs/common';
import { UserMicroserviceService } from './user-microservice.service';

@Controller('user-microservice')
export class UserMicroserviceController {
  constructor(private readonly userMicroserviceService: UserMicroserviceService) {}
}

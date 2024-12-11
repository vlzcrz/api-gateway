import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CareerList, CareerService } from './careergrpc.methods';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class CareerServiceClient implements OnModuleInit {
  private careerService: CareerService;

  constructor(@Inject('Career') private CareerClient: ClientGrpc) {}

  onModuleInit() {
    this.careerService =
      this.CareerClient.getService<CareerService>('CareerService');
  }

  GetAllCareers(): Observable<CareerList> {
    return this.careerService.GetAll({});
  }
}

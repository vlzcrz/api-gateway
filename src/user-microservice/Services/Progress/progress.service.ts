import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  ProgressRequest,
  ProgressService,
  UpdateProgressRequest,
} from './progress.methds.interface';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ProgressServiceClient implements OnModuleInit {
  private progressService: ProgressService;

  constructor(@Inject('Progress') private ProgressClient: ClientGrpc) {}

  onModuleInit() {
    this.progressService =
      this.ProgressClient.getService<ProgressService>('ProgressService');
  }

  GetUserProgress(request: ProgressRequest) {
    return this.progressService.GetUserProgress(request);
  }

  UpdateUserProgress(request: UpdateProgressRequest) {
    return this.progressService.UpdateUserProgress(request);
  }
}

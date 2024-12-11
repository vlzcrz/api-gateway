import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  SubjectList,
  SubjectPostRequisiteList,
  SubjectPreRequisiteList,
  SubjectRelationshipList,
  SubjectService,
} from './subjectgrpc.methods.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectServiceClient {
  private subjectService: SubjectService;

  constructor(@Inject('Subject') private SubjectClient: ClientGrpc) {}

  onModuleInit() {
    this.subjectService =
      this.SubjectClient.getService<SubjectService>('SubjectService');
  }

  GetAllSubjects(): Observable<SubjectList> {
    return this.subjectService.GetAll({});
  }

  GetAllRelationships(): Observable<SubjectRelationshipList> {
    return this.subjectService.GetAllRelationships({});
  }

  GetPreRequisitesMap(): Observable<SubjectPreRequisiteList> {
    return this.subjectService.GetPreRequisitesMap({});
  }

  GetPostRequisitesMap(): Observable<SubjectPostRequisiteList> {
    return this.subjectService.GetPostRequisitesMap({});
  }
}

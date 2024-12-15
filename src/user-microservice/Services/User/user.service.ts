import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  UpdateProfileRequest,
  UpdateProfileResponse,
  UserRequest,
  UserResponse,
  UserService,
} from './usergrpc.methods.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceClient implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('User') private UserClient: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.UserClient.getService<UserService>('UserService');
  }

  getUserProfile(request: UserRequest): Observable<UserResponse> {
    return this.userService.GetUserProfile(request);
  }

  updateUserProfile(
    request: UpdateProfileRequest,
  ): Observable<UpdateProfileResponse> {
    return this.userService.UpdateUserProfile(request);
  }
}

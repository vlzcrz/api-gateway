import { Body, Controller, Get, Patch, Put } from '@nestjs/common';
import { UserServiceClient } from './Services/User/user.service';
import { UserRequestDTO } from './DTOs/UserRequest.dto';
import { UpdateProfileRequestDTO } from './DTOs/UpdateProfileRequest.dto';
import { JwtToken } from 'src/decorators/jwtToken.decorator';
import {
  ProgressRequest,
  UpdateProgressRequest,
} from './Services/Progress/progress.methds.interface';
import { ProgressServiceClient } from './Services/Progress/progress.service';

@Controller('user')
export class UserMicroserviceController {
  constructor(
    private readonly UserServiceClient: UserServiceClient,
    private readonly ProgressServiceClient: ProgressServiceClient,
  ) {}

  @Get()
  getUser(@Body() UserRequest: UserRequestDTO) {
    return this.UserServiceClient.getUserProfile(UserRequest);
  }

  @Put()
  putUser(@Body() UpdateProfileRequest: UpdateProfileRequestDTO) {
    return this.UserServiceClient.updateUserProfile(UpdateProfileRequest);
  }

  @Get('my-progress')
  getMyProgress(@Body() ProgressRequest: ProgressRequest) {
    return this.ProgressServiceClient.GetUserProgress(ProgressRequest);
  }

  @Put('my-progress')
  patchMyProgress(@Body() UpdateProgressRequest: UpdateProgressRequest) {
    return this.ProgressServiceClient.UpdateUserProgress(UpdateProgressRequest);
  }
}

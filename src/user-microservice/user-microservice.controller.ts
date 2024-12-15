import { Body, Controller, Get, Patch, Put } from '@nestjs/common';
import { UserServiceClient } from './Services/User/user.service';
import { UserRequestDTO } from './DTOs/UserRequest.dto';
import { UpdateProfileRequestDTO } from './DTOs/UpdateProfileRequest.dto';
import { JwtToken } from 'src/decorators/jwtToken.decorator';

@Controller('user')
export class UserMicroserviceController {
  constructor(private readonly UserServiceClient: UserServiceClient) {}

  @Get()
  getUser(@Body() UserRequest: UserRequestDTO) {
    return this.UserServiceClient.getUserProfile(UserRequest);
  }

  @Put()
  putUser(@Body() UpdateProfileRequest: UpdateProfileRequestDTO) {
    return this.UserServiceClient.updateUserProfile(UpdateProfileRequest);
  }

  @Get('my-progress')
  getMyProgress(@JwtToken() JwtToken) {
    return { message: `get my-progress task done ${JwtToken}` };
  }

  @Patch('my-progress')
  patchMyProgress(@JwtToken() JwtToken) {
    return { message: `patch my-progress task done ${JwtToken}` };
  }
}

import { Body, Controller, Headers, Post, Put } from '@nestjs/common';
import { AuthMicroserviceService } from './auth-microservice.service';
import { AuthServiceClient } from './Services/Auth/auth.service';
import { RegisterUserDTO } from './Services/Auth/DTOs/RegisterUser.dto';
import { LoginUserDTO } from './Services/Auth/DTOs/LoginUser.dto';
import { JwtService } from '@nestjs/jwt';
import { LogoutUserDTO } from './Services/Auth/DTOs/LogoutUser.dto';
import { JwtToken } from 'src/decorators/jwtToken.decorator';
import { UpdateUserPasswordDTO } from './Services/Auth/DTOs/UpdateUserPassword.dto';

@Controller('auth')
export class AuthMicroserviceController {
  constructor(
    private readonly AuthServiceClient: AuthServiceClient,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  postRegister(@Body() RegisterUserDTO: RegisterUserDTO) {
    return this.AuthServiceClient.registerUser(RegisterUserDTO);
  }

  @Post('login')
  postLogin(@Body() LoginUserDTO: LoginUserDTO) {
    return this.AuthServiceClient.login(LoginUserDTO);
  }

  @Post('validate')
  postValidate(@JwtToken() jwtToken: string) {
    return this.AuthServiceClient.validate(jwtToken);
  }

  @Post('blacklist')
  postBlacklist(@JwtToken() JwtToken: string) {
    return this.AuthServiceClient.toBlacklist(JwtToken);
  }

  @Put('update-password')
  putUpdatePassword(
    @Body() UpdateUserPasswordDTO: UpdateUserPasswordDTO,
    @JwtToken() JwtToken: string,
  ) {
    return this.AuthServiceClient.updatePassword(
      UpdateUserPasswordDTO,
      JwtToken,
    );
  }
}

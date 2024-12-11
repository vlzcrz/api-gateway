import { Module } from '@nestjs/common';
import { AuthMicroserviceService } from './auth-microservice.service';
import { AuthMicroserviceController } from './auth-microservice.controller';
import { AuthServiceClient } from './Services/Auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), JwtModule.register({})],
  controllers: [AuthMicroserviceController],
  providers: [AuthMicroserviceService, AuthServiceClient],
})
export class AuthMicroserviceModule {}

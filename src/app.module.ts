import { Module } from '@nestjs/common';
import { CareerMicroserviceModule } from './career-microservice/career-microservice.module';
import { AuthMicroserviceModule } from './auth-microservice/auth-microservice.module';
import { ConfigModule } from '@nestjs/config';
import { UserMicroserviceModule } from './user-microservice/user-microservice.module';

@Module({
  imports: [
    CareerMicroserviceModule,
    AuthMicroserviceModule,
    ConfigModule.forRoot(),
    UserMicroserviceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

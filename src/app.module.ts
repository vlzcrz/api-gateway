import { Module } from '@nestjs/common';
import { CareerMicroserviceModule } from './career-microservice/career-microservice.module';
import { AuthMicroserviceModule } from './auth-microservice/auth-microservice.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CareerMicroserviceModule,
    AuthMicroserviceModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserMicroserviceService } from './user-microservice.service';
import { UserMicroserviceController } from './user-microservice.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserServiceClient } from './Services/User/user.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'User',
        transport: Transport.GRPC,
        options: {
          package: 'User',
          protoPath: join(__dirname, 'proto/user.proto'),
          url: 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [UserMicroserviceController],
  providers: [UserMicroserviceService, UserServiceClient],
})
export class UserMicroserviceModule {}

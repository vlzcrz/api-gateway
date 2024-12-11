import { Module } from '@nestjs/common';
import { CareerMicroserviceService } from './career-microservice.service';
import { CareerMicroserviceController } from './career-microservice.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { SubjectServiceClient } from './Services/Subject/subject.service';
import { CareerServiceClient } from './Services/Career/career.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Career', // Nombre del cliente
        transport: Transport.GRPC,
        options: {
          package: 'Career', // El paquete definido en el archivo .proto
          protoPath: join(__dirname, 'proto/career.proto'), // Ruta del archivo .proto
          url: 'localhost:5001', // Dirección del servidor gRPC
        },
      },
      {
        name: 'Subject',
        transport: Transport.GRPC,
        options: {
          package: 'Subject',
          protoPath: join(__dirname, 'proto/subject.proto'),
          url: 'localhost:5001',
        },
      },
    ]),
  ],
  controllers: [CareerMicroserviceController],
  providers: [
    CareerMicroserviceService,
    SubjectServiceClient,
    CareerServiceClient,
  ],
})
export class CareerMicroserviceModule {}

import { IsString, IsUUID } from 'class-validator';

export class UpdateProfileRequestDTO {
  @IsUUID()
  UserId: string;

  @IsString()
  Name: string;

  @IsString()
  FirstLastName: string;

  @IsString()
  SecondLastName: string;
}

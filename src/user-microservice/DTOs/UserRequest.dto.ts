import { IsUUID } from 'class-validator';

export class UserRequestDTO {
  @IsUUID()
  UserId: string;
}

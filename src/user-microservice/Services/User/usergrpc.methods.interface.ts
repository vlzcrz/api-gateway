import { Observable } from 'rxjs';

// Interfaz del servicio UserService
export interface UserService {
  GetUserProfile(request: UserRequest): Observable<UserResponse>;
  UpdateUserProfile(
    request: UpdateProfileRequest,
  ): Observable<UpdateProfileResponse>;
}

// Definición de mensajes
export interface UserRequest {
  UserId: string;
}

export interface UserResponse {
  id: string;
  name: string;
  firstLastName: string;
  secondLastName: string;
  rut: string;
  email: string;
}

export interface UpdateProfileRequest {
  UserId: string;
  Name: string;
  FirstLastName: string;
  SecondLastName: string;
}

export interface UpdateProfileResponse {
  success: boolean;
}

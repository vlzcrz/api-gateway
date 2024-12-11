import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserDTO } from './DTOs/RegisterUser.dto';
import axios from 'axios';
import { LoginUserDTO } from './DTOs/LoginUser.dto';
import { RegisterResponseDTO } from './DTOs/responseDTO/RegisterRes.dto';
import { LoginResponseDTO } from './DTOs/responseDTO/LoginRes.dto';
import { UpdateUserPasswordDTO } from './DTOs/UpdateUserPassword.dto';

@Injectable()
export class AuthServiceClient {
  async registerUser(RegisterUserDTO: RegisterUserDTO) {
    try {
      const response = await axios.post(
        `${process.env.AUTH_SERVICE}/auth/register`,
        RegisterUserDTO,
      );

      const registerResponse: RegisterResponseDTO = response.data;
      return registerResponse;
    } catch (error) {
      throw new BadRequestException(error.response.data);
    }
  }

  async login(LoginUserDTO: LoginUserDTO) {
    try {
      const response = await axios.post(
        `${process.env.AUTH_SERVICE}/auth/login`,
        LoginUserDTO,
      );

      const loginResponseDTO: LoginResponseDTO = response.data;
      return loginResponseDTO;
    } catch (error) {
      throw new BadRequestException(error.response.data);
    }
  }

  async validate(JwtToken: string) {
    try {
      const response = await axios.post(
        `${process.env.AUTH_SERVICE}/auth/validate`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JwtToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException(error.response.data);
    }
  }

  async toBlacklist(JwtToken: string) {
    try {
      const response = await axios.post(
        `${process.env.AUTH_SERVICE}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JwtToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException(error.response.data);
    }
  }

  async updatePassword(
    UpdateUserPasswordDTO: UpdateUserPasswordDTO,
    JwtToken: string,
  ) {
    try {
      const response = await axios.put(
        `${process.env.AUTH_SERVICE}/auth/update-password`,
        UpdateUserPasswordDTO,
        {
          headers: {
            Authorization: `Bearer ${JwtToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException(error.response.data);
    }
  }
}

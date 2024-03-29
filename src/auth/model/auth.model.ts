/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthModel {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}

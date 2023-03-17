import { Exclude } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export default class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  fullname: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

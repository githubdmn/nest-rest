import { Exclude } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export default class UserDto {
  @Exclude()
  id: number;
  @IsString({ always: false })
  userId: string;
  @IsString()
  username: string;
  @IsString()
  fullname: string;
  @IsEmail()
  email: string;
  @Exclude()
  @IsString()
  password: string;
}

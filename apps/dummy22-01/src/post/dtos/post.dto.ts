import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export default class PostDTO {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  text: string;
}

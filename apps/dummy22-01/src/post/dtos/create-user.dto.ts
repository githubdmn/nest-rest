import { IsNotEmpty, IsString } from 'class-validator';

export default class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  text: string;
}

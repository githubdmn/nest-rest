import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateCardDto {
  @IsString()
  title: string;
  @IsString()
  text: string;
  @IsString()
  @IsNotEmpty()
  userId: string;
}

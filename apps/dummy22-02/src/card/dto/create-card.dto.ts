import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export default class CreateCardDto {
  @IsString()
  title: string;
  @IsString()
  body: string;
}

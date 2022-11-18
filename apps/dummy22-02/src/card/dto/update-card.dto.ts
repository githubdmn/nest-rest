import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export default class CreateCardDto {
  @IsString()
  @IsOptional()
  title: string;
  @IsString()
  @IsOptional()
  body: string;
}

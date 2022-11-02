import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateCardDto {
  @Expose()
  @IsString()
  title: string;
  @Expose()
  @IsString()
  body: string;
}

import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CardDto {
  @IsString()
  id: string;
  @Expose()
  @IsString()
  card_id: string;
  @Expose()
  @IsString()
  title: string;
  @Expose()
  @IsString()
  body: string;
}

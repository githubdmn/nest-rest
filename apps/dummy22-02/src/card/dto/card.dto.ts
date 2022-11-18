import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export default class CardDto {
  @Exclude()
  @IsString()
  id: string;
  @IsString()
  card_id: string;
  @IsString()
  title: string;
  @IsString()
  body: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export default class UpdateCardDto {
  @IsString()
  cardId: string;
  @IsString()
  title: string;
  @IsString()
  text: string;
  @IsString()
  @IsNotEmpty()
  userId: string;
}
